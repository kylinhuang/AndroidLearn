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
    TouchableOpacity,
} from 'react-native';

var Main = require('./XMGMain');

var Launch = React.createClass({
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={styles.launchImageStyle} />
        );
    },

    //复制操作 定时器 网络请求
    componentDidMount(){

        //定时
        setTimeout(()=>{
            //页面的切换
            this.props.navigator.replace({
                component:Main//
            });
        });
    },


});


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
    launchImageStyle: {
        flex: 1,
    },
});

//输出组件类
module.exports = Launch;

