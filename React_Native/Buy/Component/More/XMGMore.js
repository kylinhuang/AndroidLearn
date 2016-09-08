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
    Image,
    TouchableOpacity,
    Platform,//判断 当前运行的系统
    ScrollView,

} from 'react-native';


//导入外部组件类
var CommonCell = require('./XMGCommonCell');

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                {/*导航条*/}
                {this.renderNavBar()}

                <ScrollView>

                    <View style={{marginTop:20}}>
                        <CommonCell title="扫一扫" />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell title="省流量模式" isSwitch={true} />
                        <CommonCell title="消息提醒" />
                        <CommonCell title="邀请好友使用" />
                        <CommonCell title="清空缓存" rightTitle="1.9M" />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell title="意见反馈" />
                        <CommonCell title="问卷调查" />
                        <CommonCell title="支付帮助" />
                        <CommonCell title="网络诊断" />
                        <CommonCell title="关于" />
                        <CommonCell title="我要聘用" />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell title="精品应用" />
                        <CommonCell title="问卷调查" />
                        <CommonCell title="支付帮助" />
                        <CommonCell title="网络诊断" />
                        <CommonCell title="关于" />
                        <CommonCell title="我要聘用" />
                    </View>

                </ScrollView>

            </View>
        );
    },
    //导航条
    renderNavBar(){
        return (
            <View style={styles.navOutViewStyle}>
                <Text style={styles.titleMoreStyle}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('setting')}} style={styles.rightViewStyle} >
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )

    },
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
    navImageStyle:{
        width:  Platform.OS=='ios'? 28 :24,
        height: Platform.OS=='ios'? 28 :24,

    },

    navOutViewStyle:{

        height: Platform.OS=='ios'? 64 :44,
        backgroundColor:'rgba(255,96,0,1.0)',
        //主轴方向
        flexDirection:'row',
        //侧轴对齐方式
        alignItems: 'center',

        //z主轴对齐方式
        justifyContent:'center',

    },
    rightViewStyle:{
        //绝对定位
        position:'absolute',
        right:10,
        bottom:15,

    },
    titleMoreStyle:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    },
});

//输出组件类
module.exports = More;

