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


var TopView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderScrollItem()}

                </ScrollView>

                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicatior()}
                </View>
            </View>
        );
    },

    renderScrollItem(){
        //组件数量
        var itemArr = [];
        //颜色数组
        var colorArr = ['red' , 'green'];

        for (var i = 0; i<colorArr.length;i++){
            itemArr.push(

                <View  style={{width:200,height:120,backgroundColor:colorArr[i]}} key={i}>
                    <Text>{i}</Text>
                </View>

            );
        }
        // 返回组件数组
        return itemArr;
    },

    //页码
    renderIndicatior(){
        // 指示器数组
        var indicator = [];
        for (var i=0;i<2;i++){
            indicator.push(
                <Text key={i}  >&bull;</Text>
            );
        }
        return indicator;
    },

    getInitialState(){
        return {
            acticityPage:0
        }
    },
});


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#e8e8e8',
    },
    ViewStyle: {

        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'blue',
    },

    indicatorViewStyle:{
        //主轴方向
        flexDirection:'row',
        //主轴显示方式
        justifyContent: 'center',


    },

});



//输出组件类
module.exports = TopView;

