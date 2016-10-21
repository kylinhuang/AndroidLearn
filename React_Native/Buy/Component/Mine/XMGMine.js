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
    ScrollView
} from 'react-native';

var  CommonMyCell = require('./XMGCommonMyCell');
var MineMiddleView = require('./XMGMineMiddleView');
var HeaderView = require('./XMGMineHeaderView');

var Mine = React.createClass({
    render() {
        return (
            <ScrollView  style={styles.scrollViewStyle} >

                {/*头部的View*/}
                <HeaderView />

                <View>
                    <CommonMyCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                    <MineMiddleView />
                </View>

                <View style={{marginTop:20}}>
                    <CommonMyCell
                        leftTitle="钱包"
                        leftIconName="draft"
                        rightTitle="账户余额" />

                    <CommonMyCell
                        leftTitle="抵用券"
                        leftIconName="like"
                        rightTitle="0" />
                </View>


                <View style={{marginTop:20}}>
                    <CommonMyCell
                        leftIconName="card"
                        leftTitle="积分商城" />
                </View>

                <View style={{marginTop:20}}>
                    <CommonMyCell
                        leftTitle="合作"
                        leftIconName="new_friend"
                        rightIconName="me_new"
                    />
                </View>

            </ScrollView>
        );
    }
});


const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: '#e8e8e8',
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

//输出组件类
module.exports = Mine;

