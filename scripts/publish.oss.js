
  const fs = require('fs')
  const path = require('path')
  const OSS = require('ali-oss')
  
  const store = new OSS({
    accessKeyId: process.env.ACCESS_KEY_ID,
    accessKeySecret: process.env.ACCESS_KEY_SECRET,
    region: 'oss-cn-shanghai',
    bucket: 'deer-ui-cms-oss',
    timeout: '120s'
  })
  
  const baseDir = path.resolve(__dirname, '../docs')
  
  function probeObjectMeta(...args) {
    return store.getObjectMeta(...args).catch(e => null)
  }
  
  async function uploadDir (dir, headers, skip = false) {
    const files = fs.readdirSync(path.resolve(baseDir, dir)).filter(x => !x.endsWith('map'))
    for (const file of files) {
      const stats = fs.statSync(path.resolve(baseDir, dir, file))
      // 如果是文件，则上传到 oss，目录跳过
      const isSkip = skip && await probeObjectMeta(path.join(dir, file))
      if (stats.isFile()) {
        if (isSkip) {
          console.info(`skip: ${path.join(dir, file)}`)
        } else {
          const o = await store.put(path.join(dir, file), path.resolve(baseDir, dir, file), {
            headers
          })
          console.info(`done: ${o.name}`)
        }
      }
    }
    return true
  }
  
  Promise.all([
    uploadDir('.', {
      'Cache-Control': 'public, no-cache'
    }),
    uploadDir('build', {
      'Cache-Control': 3600 * 24 * 365
    }, true),
    uploadDir('build/sb_dll', {
      'Cache-Control': 3600 * 24 * 365
    }, true),
    uploadDir('static/css', {
      'Cache-Control': 3600 * 24 * 365
    }, true)
  ]).catch(e => {
    console.error(e)
    process.exit(1)
  })
  