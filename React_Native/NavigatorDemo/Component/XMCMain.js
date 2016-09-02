
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

//引入外部组件
var  Home = require('../Component/XMCHome');
var  Message = require('../Component/XMCMessage');
var  Find = require('../Component/XMCFind');
var  Mine = require('../Component/XMCMine');

var Main = React.createClass({

    render() {
        return (


            <TabBarIOS
                tintColor = "orange"
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_home')}
                    title = "首页"
                    selected = {this.state.selectedItem == 'home'}
                    onPress={()=>{this.setState({selectedItem: 'home'})}}//点击
                >

                    <NavigatorIOS
                        tintColor = "orange"
                        style={{flex:1}}
                        initialRoute = {{
                            component: Home, //加载的版块
                            title: '网易' ,
                            leftButtonIcon:require('image!navigationbar_friendattention'),
                            rightButtonIcon:require('image!navigationbar_pop'),
                        }}
                    />


                </TabBarIOS.Item>

                {/*发现*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_discover')}
                    title = "发现"
                    selected = {this.state.selectedItem == 'find'}
                    onPress={()=>{this.setState({selectedItem: 'find'})}}//点击
                >

                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component: Find, //加载的版块
                            title: '发现'
                        }}
                    />

                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    title = "消息"
                    icon = {require('image!tabbar_message_center')}
                    selected = {this.state.selectedItem == 'message'}
                    onPress={()=>{this.setState({selectedItem: 'message'})}}//点击
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component: Message, //加载的版块
                            title: '消息'
                        }}
                    />

                </TabBarIOS.Item>

                {/*我的*/}
                <TabBarIOS.Item
                    icon = {require('image!tabbar_profile')}
                    title = "我的"
                    selected = {this.state.selectedItem == 'mine'}
                    onPress={()=>{this.setState({selectedItem: 'mine'})}}//点击
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component: Mine, //加载的版块
                            title: '我的'
                        }}
                    />

                </TabBarIOS.Item>


            </TabBarIOS>



        );
    },
    //初始化方法
    getInitialState(){
        return{
            //设置 选中标识
            selectedItem: 'home'
        }
    }
})



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
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

//输出
module.exports = Main ;

