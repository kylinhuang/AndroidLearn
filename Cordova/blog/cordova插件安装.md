# Cordova 创建插件
# 1 安装plugman

    npm install -g plugman

# 2 创建插件

    plugman create --name SengledLivePlugin --plugin_id com.sengled --plugin_version 0.0.1


# 3 添加平台  
plugman platform add --platform_name <platform>


    plugman platform add --platform_name android

# 4 定义插件  ---

# 5 测试插件
### 5.1 主项目中 添加插件

    cordova plugin add <path 插件路径>

### 5.2 主项目中 使用    
