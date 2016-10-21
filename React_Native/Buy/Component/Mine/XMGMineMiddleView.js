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
    Platform,
    Switch,
    TouchableOpacity,
} from 'react-native';


/**-------导入外部的json数据-------***/
var MiddleData = require('./MiddleDate.json');

var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },

    renderAllItem(){
        // 定义组件数组
        var itemArr = [];
        // 遍历
        for(var i=0; i<MiddleData.length; i++){
            // 取出单独的数据
            var data = MiddleData[i];
            // 创建组件装入数组
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            );
        }
        // 返回
        return itemArr;
    },

});



// 里面的组件类
var InnerView = React.createClass({
    getDefaultProps(){
        return{
            iconName: '',
            title:''
        }
    },

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri: this.props.iconName}} style={{width:40, height:30, marginBottom:3}}/>
                    <Text style={{color:'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        height:Platform.OS == 'ios' ? 55: 45,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 垂直居中
        alignItems:'center'
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
    leftImgStyle:{
        width:24,
        height:24,
        marginLeft:6,
        borderRadius:12,
    },
    leftTitleStyle:{
        fontSize:16,
        marginLeft:5,
    },
    leftViewStyle:{
        // 主轴的方向
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        // 左外边距
        marginLeft:8
    },


});


module.exports = MineMiddleView;
