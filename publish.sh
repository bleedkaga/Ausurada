#!/usr/bin/env bash

npm config get registry
npm config set registry=http://registry.npmjs.org
echo '请进行登录相关操作'
npm login # 登录
echo '---- publishing -----'
npm publish

npm config set registry=http://registry.npm.taobao.org
echo '发布完成'

exit;