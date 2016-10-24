/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    NavigatorIOS,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

//引入外部 js文件
var LoginView = require('./view/loginView') ;

class MyView extends Component {
  render() {
    return (
      <ScrollView>
        <TouchableHighlight underlayColor="#eee" onPress={()=>this.jumpToDay()}>
          <Text style={{color:'#555'}}>Day1: A stop watch</Text>
        </TouchableHighlight>
      </ScrollView>

    );
  }
  jumpToDay(){
      this.props.navigator.push({
          title: "day1",
          component:Day1,
          navigationBarHidden: false,
      })
  }
}

export default class practice extends Component {
  render() {
    return (
        <LoginView/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('practice', () => practice);
