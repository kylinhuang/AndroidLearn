### Cordova 环境安装

[Cordova 主页](http://cordova.apache.org/)



# Cordova 安装
1. install npm 、node.js
2. install Cordova CLI


### 1.1 install npm 、node.js

检测是否安装 Terminal


    npm -v
    node -v
没有安装



### 1.12 install Cordova CLI

因为某些原因,国内的网络安装ionic和cordova 会出现错误,因此要跳过某些墙。采用淘宝NPM镜像。打开终端直接输入以下命令即可。

    npm install -g cnpm --registry=https://registry.npm.taobao.org

通过淘宝NPM镜像就可以安装ionic和cordova包.
输入在终端中以下内容:

    sudo cnpm install -g cordova ionic


检测是否安装完成

    ionic info
