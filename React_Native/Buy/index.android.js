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
    Navigator,
} from 'react-native';

var Main = require('./Component/Main/XMGMain');
var LaunchImage = require('./Component/Main/XMGLaunchImage');


class Buy extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ name: '启动页', component: LaunchImage }}
            configureScene={(route) => {
              return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

AppRegistry.registerComponent('Buy', () => Buy);
