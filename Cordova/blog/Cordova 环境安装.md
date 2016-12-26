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




# 创建项目

    cordova create hello com.kylin.hello


# 运行

    cd hello/
    cordova platform  add android
    cordova build
    cordova run android(连接手机上运行)



# 疑问
1. 创建项目


    cordova create hello com.kylin.hello

    ionic start myproject

    区别在什么地方？

    ionic 创建基于cordova 只是命令不一样


### IOS

    ionic start myproject
    cd myproject
    ionic platform add ios
    ionic build ios
    ionic emulate ios

### android   

    ionic start myproject
    cd myproject
    ionic platform add android
    ionic build android
    ionic emulate android(模拟器上运行)
    ionic run android (连接手机上运行)





ionic serve  (页面调试)


# ionic 创建方式
默认创建  默认使用ionic1

    ionic start myproject

指定创建 ionic2 版本

    ionic start awesome-app --v2

指定创建  ionic2 版本   设置 Typescript

    ionic start awesome-app --v2 --typescript 



npm install -g plugman //安装plugman




# 配置已经存在项目运行
cd hello/
### 1 npm install

    npm install
### 2 添加平台

    cordova platform  add android

### 3 添加插件（勿忘）

    cordova plugin add ../Plugins/cordova-cookie-master-master/

### 4 添加插件    

    cordova run android


有些问题 TODO  
这样有时候不一定能成功
ionic platform add android
ionic run android
还是失败
多执行几次
ionic run android 就可以了？？？？？



===============
查看项目插件

    cordova plugin

    ionic plugin

删除插件

    cordova plugin rm com.sengled   
    ionic plugin rm com.sengled.slliveplayer

添加插件        

    cordova plugin add <path>
    ionic plugin add <path>

运行

    cordova run android  
    ionic run android    
