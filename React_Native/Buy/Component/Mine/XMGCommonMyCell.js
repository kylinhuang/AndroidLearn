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



var CommonMyCell = React.createClass({
    render() {
        return (
            <TouchableOpacity onPress={()=>{alert()}}>
                <View style={styles.container}>

                    {/*--左边--*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}}  style={styles.leftImgStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>

                    {/*右边*/}
                    {this.renderRightView()}

                </View>
            </TouchableOpacity>
        );
    },

    getDefaultProps(){
        return {
            leftTitle:'',//标题
            leftIconName: '',
            rightTitle: '',
            rightIconName: '',
        }
    },

    // cell右边显示的内容
    renderRightView(){
        return(
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {this.rightTitle()}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8}}/>
            </View>
        )
    },
    rightTitle(){


        if(this.props.rightIconName.length == 0){ // 不返回图片
            return(
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            )
        }else{
            return(
                <Image source={{uri: this.props.rightIconName}}  style={{width:24, height:13}}/>
            )
        }
    }


});

const styles = StyleSheet.create({
    container: {
        height:Platform.OS == 'ios' ? 40: 30,
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


module.exports = CommonMyCell;
