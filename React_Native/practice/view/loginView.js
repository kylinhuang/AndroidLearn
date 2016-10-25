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
    Image, TextInput ,Touchable,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
          {/** 头像*/}
          <Image source={require('../img/img_logo_login.png')} style={styles.iconStyle} />

          {/** 账户 */}
          <View  style={styles.inputLayout} >
              <Image source={require('../img/img_account.png')} style={styles.iconInputStyle} />
              <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} />
          </View>

          {/** 密码 */}
          <View style={styles.inputLayout} >
              <Image source={require('../img/img_password.png')} style={styles.iconInputStyle} />
              <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle}  />
          </View>



          {/** 登陆 */}
          <View style={styles.loginBtnStyle }>
                <Text > 登陆 </Text>
          </View>

          {/** 设置 */}
          <View style={styles.loginSetStyle} >
              <Text > 重置密码 </Text>
          </View>

          {/** 其他登陆方式 */}
          <View style={styles.loginOtherStyle}>
              <Text > 没有账号吗？ </Text>
              <Text > 注册账号 </Text>
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
        // textAlign:'center',
        width:width,
        marginLeft:10,
    },
    loginBtnStyle: {
        height:35,
        width:width*0.8,
        backgroundColor:'#f39b63',
        marginTop:30,
        marginBottom:30,
        justifyContent:'center', //主轴
        alignItems:'center',//子元素沿着次轴排列方式 flex-start、center、flex-end以及stretch。
        borderRadius:8,

    },

    loginSetStyle: {
        width:width*0.8,
        // backgroundColor:'red',
        // marginTop:30,
        // marginBottom:30,
        flexDirection:'row', //主轴方向 row column
        justifyContent:'flex-end', //子元素沿着主轴的排列方式 lex-start、center、flex-end、space-around以及space-between
    },
    loginOtherStyle: {
        width:width,
        flexDirection:'row', //主轴方向 row column
        justifyContent:'center', //子元素沿着主轴的排列方式  flex-start、center、flex-end、space-around以及space-between
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

    iconInputStyle: {
        width: 30,
        height: 30,
        marginLeft:10,
    },
    inputLayout:{
        backgroundColor:'white', //背景色
        flexDirection:'row', //主轴方向
        alignItems: 'center',//决定其子元素沿着次轴 排列方式  flex-start、center、flex-end以及stretch。
    }
});


module.exports = LoginView ;  //添加  loginview
//AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
