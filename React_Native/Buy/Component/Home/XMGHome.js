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
    TextInput,
    Platform,
    ScrollView,
} from 'react-native';

//导入外部组件类
var HomeDetail = require('./XMGHomeDetail');
var TopView = require('./XMGTopView');


var Dimensions = require('Dimensions');
var {width , height} = Dimensions.get('window');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}


                {/*首页的主要内容*/}
                <ScrollView>
                    {/*头部的View*/}
                    <TopView />

                </ScrollView>

            </View>
        );
    },
    //跳转详情
    pushToDetail(){
        this.props.navigator.push({
            component:HomeDetail,//要跳转版块
            title:'详情'
        });

    },
    //首页导航栏
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}

                <TouchableOpacity onPress={()=>this.pushToLocation()} >
                    <View style={styles.navLeftViewStyle}>
                        <Text style={{color:'white'}}> 广州 </Text>

                    </View>
                </TouchableOpacity>

                {/*中间*/}
                <TextInput
                    placeholder="输入商家,品类,商圈"
                    style={styles.topInput}
                />
                {/*右边*/}
                <View style={styles.navRightViewStyle}>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />

                </View>

            </View>
        )
    },
    pushToLocation(){

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
    topInput: { //输入框
        width:width*0.7,
        height:32,
        backgroundColor:'white',
        marginTop:26,

        //侧轴对齐方式
        alignItems: 'center',

        //设置圆角
        borderRadius:15,

        //左边间距
        paddingLeft:10,

    },
    navRightImgStyle: {
        width:30,
        height:30,
    },
    navBarStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        //主轴方向
        flexDirection:'row',
        //侧轴对齐方式
        alignItems: 'center',

        //z主轴对齐方式
        justifyContent:'space-around',

    },
    navRightViewStyle:{
        //主轴方向
        flexDirection:'row',
        //侧轴对齐方式
        alignItems: 'center',
        // backgroundColor:'blue',
        height:44,
        marginTop:Platform.OS =='ios' ? 22 :0,
    },
    navLeftViewStyle:{
        height:44,
        marginTop:Platform.OS =='ios' ? 22 :0,
        // backgroundColor:'blue',
        // //侧轴对齐方式
        // alignItems: 'center',


        //z主轴对齐方式
        justifyContent:'space-around',
    },


});



//输出组件类
module.exports = Home;

