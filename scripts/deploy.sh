#!/bin/bash

# 确保脚本抛出遇到的错误
set -e

echo "start build..."
# 打包文档
npm run build:docs

echo "√ build success"

# 进入生成的文件夹
cd .docs

echo "start publish..."
# 提交到  gh-pages
git config  --get remote.origin.url
git init
git config user.name "zhangboyang123"
git config user.email "2740824389@qq.com"
git add .
git commit -m 'docs:publish'

git push --force --quiet git@github.com:zhangboyang123/deer-ui.git master:gh-pages
echo "√ publish success 🦌"

cd -
