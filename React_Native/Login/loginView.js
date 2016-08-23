/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,  //注册
  StyleSheet,   //样式
  Text,         //文本组件
  View,
    Image, TextInput ,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
          {/** 头像*/}
          <Image source={require('./img/icon.png')} style={styles.iconStyle} />

          {/** 账户 */}
          <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} />
          {/** 密码 */}
          <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle}  />


          {/** 登陆 */}
          <View style={styles.loginBtnStyle }>
                <Text > 登陆 </Text>
          </View>

          {/** 设置 */}
          <View style={styles.loginSetStyle} >
              <Text > 无法登陆 </Text>
              <Text > 新用户 </Text>
          </View>

          {/** 其他登陆方式 */}
          <View style={styles.loginOtherStyle}>
              <Text > 其他登陆方式: </Text>
              <Image source={require('./img/qq_icon.png')} style={styles.loginOtherIconStyle} />
              <Image source={require('./img/wx_icon.png')} style={styles.loginOtherIconStyle} />
              <Image source={require('./img/wb_icon.png')} style={styles.loginOtherIconStyle} />

          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center', // 侧轴方向
        backgroundColor: '#dddddd',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    iconStyle: {
        marginTop:50,
        marginBottom:30,
        width: 80,
        height: 80,
        borderRadius:40,
        borderWidth:2,
        borderColor:'white',
    },
    textInputStyle: {
        height:38,
        backgroundColor:'white',
        marginBottom:1,
        textAlign:'center',
        width:width,

    },
    loginBtnStyle: {
        height:35,
        width:width*0.8,
        backgroundColor:'blue',
        marginTop:30,
        marginBottom:30,
        justifyContent:'center', //主轴
        alignItems:'center',//侧轴

        borderRadius:8,

    },

    loginSetStyle: {
        width:width*0.8,
        // backgroundColor:'red',
        // marginTop:30,
        // marginBottom:30,
        flexDirection:'row', //主轴方向

        justifyContent:'space-between', //主轴对齐方式



    },
    loginOtherStyle: {

        width:350,
        // backgroundColor:'red',
        // marginTop:30,
        // marginBottom:30,
        flexDirection:'row', //主轴方向

        // justifyContent:'space-between', //主轴对齐方式
        alignItems:'center', //侧轴对齐方式

        //绝对定位
        position:'absolute',
        bottom:10,
        left:10,

    },
    loginOtherIconStyle: {
        width:60,
        height:60,
        borderRadius:30,
        marginLeft:8,
    },
});


module.exports = LoginView ;  //添加  loginview
//AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
