# Cordova 创建插件

[参考](http://blog.csdn.net/u013598660/article/details/50065937)


[插件添加 文件配置](https://cordova.apache.org/docs/en/5.0.0/plugin_ref/spec.html)


# 1 安装plugman
执行安装命令，这个要在安装了nodeJS,cordova后才有用。

    npm install -g plugman

# 2 创建插件

    plugman create --name SLLivePlugin --plugin_id com.sengled.plugin.live --plugin_version 0.0.1


# 3 添加平台  
plugman platform add --platform_name <platform>

    cd SLLivePlugin/
    plugman platform add --platform_name android

# 4 定义插件  ---

# 5 测试插件
### 5.1 主项目中 添加插件

    cordova plugin add <path 插件路径>

### 5.2 主项目中 使用   

js 中使用

Ts 中使用

    var device = cordova.require('cordova-plugin-device.device'); 



# 配置 插件
activity

    <platform name="android">
        <config-file target="AndroidManifest.xml" parent="/manifest/application">
            <activity android:name="mobile_app" android:launchMode="singleInstance" />
        </config-file>
    </platform>   

    <config-file target="AndroidManifest.xml" parent="/manifest/application">

      <activity android:name="com.foo.Foo" android:label="@string/app_name">
          <intent-filter>
          </intent-filter>
      </activity>
    </config-file>


activity XML

    <source-file src="path/to/your/layout/file.xml" target-dir="res/layout"/>




    Application app=cordova.getActivity().getApplication();
      String package_name = app.getPackageName();
      Resources resources = app.getResources();
      int ic = resources.getIdentifier("acticity_live_layout", "layout", package_name);





# 插件使用注意
1 主项目缓存
当添加插件 修改的代码并没有 添加
先删除在添加

    ionic plugin rm com.sengled.slliveplayer  

    ionic plugin add /Users/kylinhuang/svn/Sengledlife/05-项目代码/正式代码/Plugins/SLLivePlayerPlugin

    ionic run android





2 主项目缓存

    ionic platform rm android  
    platform/android 目录删除



    ionic platform add android  
    platform/android 添加目录


修改 platform/android 下文件


    ionic build android
    platform/android 下文件 修改的文件未覆盖，还是修改后的。




    <platform name="android">
        <config-file target="res/xml/config.xml" parent="/*">
            <feature name="Pebble">
                <param name="android-package" value="com.jetboystudio.pebble.PebblePGPlugin"/>
            </feature>
        </config-file>
        <source-file src="src/android/PebblePGPlugin.java" target-dir="src/com/jetboystudio/pebble" />
        <source-file src="src/android/libs/pebble_kit.jar" target-dir="libs" />
    </platform>


# 添加文件 java

<!--SLLivePlayerPlugin.java-->
    <source-file src="src/android/src/com/sengled/slliveplayer/SLLivePlayerPlugin.java"
                     target-dir="src/com/sengled/slliveplayer/SLLivePlayerPlugin"/>
    <!--SLLiveActivity.java-->
    <source-file src="src/android/src/com/sengled/slliveplayer/SLLiveActivity.java"
                     target-dir="src/com/sengled/slliveplayer/SLLiveActivity"/>
    <!--VideoPlay.java-->
    <source-file src="src/android/src/com/sengled/slliveplayer/manager/VideoPlay.java"
                 target-dir="src/com/sengled/slliveplayer/manager"/>

# 添加 activity

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
    <activity android:name="com.foo.Foo" android:label="@string/app_name">
        <intent-filter>
        </intent-filter>
    </activity>
    </config-file>

# 添加 layout

    <!--acticity_live_layout.xml-->
    <source-file src="src/android/res/layout/acticity_live_layout.xml" target-dir="res/layout"/>


# 添加 图片

<!-- drawable-xhdpi -->
    <source-file src="src/android/res/drawable-xhdpi/icon_back.png" target-dir="res/drawable-xhdpi"/>
    <source-file src="src/android/res/drawable-xhdpi/icon_control_point.png" target-dir="res/drawable-xhdpi"/>
    <source-file src="src/android/res/drawable-xhdpi/icon_light_0.png" target-dir="res/drawable-xhdpi"/>
    <source-file src="src/android/res/drawable-xhdpi/icon_light_100.png" target-dir="res/drawable-xhdpi"/>
    <source-file src="src/android/res/drawable-xhdpi/icon_live.png" target-dir="res/drawable-xhdpi"/>
    <source-file src="src/android/res/drawable-xhdpi/icon_setting.png" target-dir="res/drawable-xhdpi"/>
    <source-file src="src/android/res/drawable-xhdpi/icon_signal.png" target-dir="res/drawable-xhdpi"/>

    <!-- drawable -->
    <source-file src="src/android/res/drawable/po_seekbar.png" target-dir="res/drawable"/>
    <source-file src="src/android/res/drawable/thumb_bar.png" target-dir="res/drawable"/>


# 添加jar

    <source-file src="src/android/libs/pebble_kit.jar" target-dir="libs" />


# 添加so文件

    <source-file src="src/android/libs/armeabi/libavcodec-56.so"


# 注意
SLLivePlayerPlugin中 导包

    import org.apache.cordova.CordovaPlugin;
    import org.apache.cordova.CallbackContext;




ts 中添加 调用插件 使用

1 导入
// SLLivePlayerPlugin
declare var SLLivePlayerPlugin:any;

2 调用

    SLLivePlayerPlugin.startLive("LivingRoom", "beijing", 50, "rtsps://101.68.222.221:1554/27B529C1DDBE30E984991CE96472BA99.sdp", function (successMessage) {
      console.log(successMessage);
      }, function (errorMessage) {
        console.log(errorMessage);
      });





testPlugin.java 放在jar中 不行
