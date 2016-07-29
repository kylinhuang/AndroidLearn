/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//var React = require('react'); //es5 导入方式
import React, { Component } from 'react'; //es6 导入方式
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloReactNative extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>kylinhuang</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({

  title:{
    fontSize: 26 ,
    color: '#6435c9',
    textAlign:'center' , //文字对齐方式
    fontStyle:'italic' , //文字样式
    letterSpacing:2,    //字间距
    lineHeight:33 ,     //行间距
    fontFamily:'Helvetica Neue' , //字体
    fontWeight:'bold' , //900 -100
    textDecorationLine:'line-through',//line-through 删除线
    // underline 下划线

    textDecorationStyle:'solid' //solid 实线  double 双实线 dotted 点线 dashed虚线
  },


  container:{
    backgroundColor: '#eae7ff',
    flex: 1,
    marginTop:130
    // margin: 30 ,
    // borderWidth: 1 , //边框宽度
    // borderColor: '#6435c9' ,
    // borderRadius : 20 , //边框圆角
    // shadowColor : '#6435c9', //阴影颜色
    // shadowOpacity : 0.6 , //阴影不透明度 0-1 之间
    // shadowRadius: 2 , //阴影扩散
    // shadowOffset :{ //阴影 偏移
    //   height : 5  ,
    //   width: 1
    // },

  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
// //flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
// //flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
// //center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
// //baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
// //stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
