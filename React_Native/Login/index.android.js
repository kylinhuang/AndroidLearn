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
    Image,
} from 'react-native';

//引入外部 js文件
var LoginView = require('./loginView') ;

class HelloReactNative extends Component {
  render() {
    return (
        <LoginView />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
