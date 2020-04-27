export const trim = (value = "") => {
    const _value = Array.prototype.join.call(value,"");
    return _value.replace(/\s/g,"");
}


export const debounce = (func, wait) => {
    let timer = null
    return (...args)=> {
        let context = this
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            func.apply(context, args)
        },wait)
    }
}
export const getQueryString = (name) => {
  let reg = new RegExp(`(^|&)${  name  }=([^&]*)(&|$)`, 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
  }
export const formatFileSize = fileSize => {
  const sizeUnitArr = ["Byte", "KB", "MB", "GB"];
  if (fileSize === 0) {
    return "0 KB";
  }
  const i = parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)));
  if (i === 0) {
    return fileSize + sizeUnitArr[i];
  }
  return (fileSize / 1024 ** i).toFixed(0) + sizeUnitArr[i];
};
  