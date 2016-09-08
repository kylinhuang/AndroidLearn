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
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';


var shareData = require('./shareData.json')

//ES5
var ListViewGridView = React.createClass({

  //设置 固定值
  getDefaultProps(){

    return {

    }
  },

  //设置 初始化值
  getInitialState(){
    // 1.1 设置数据源
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});


    //1.2 设置数据返回
    return {
      dataSource : ds.cloneWithRows(shareData.data)
    }
  },

  render(){
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            contentContainerStyle={styles.listViewStyle}
        />
    );
  },

  //单独 cell
  renderRow(rowDate){
    return (
        <TouchableOpacity >

          <View >

            <Image source={{uri: rowDate.icon }} style={styles.iconStyle}/>
            <Text >{rowDate.title}</Text>

          </View>

        </TouchableOpacity>
    );

  }


});
// class ListViewGridView extends Component {
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }



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

  listViewStyle : {
    //主轴方向
    flexDirection: 'row',
    // 多行显示


  },
  iconStyle: {
    width:80,
    height:80,
  },



});

AppRegistry.registerComponent('ListViewGridView', () => ListViewGridView);
