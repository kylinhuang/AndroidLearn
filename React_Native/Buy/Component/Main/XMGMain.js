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
    Platform,//判断 当前运行的系统
    Navigator,
} from 'react-native';
// Import TabNavigator as a JavaScript module:

// 导入外部组件类
import TabNavigator from 'react-native-tab-navigator';


var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/XMGMore');

var Main = React.createClass({
    render() {
        return (
             <TabNavigator>
                 {/*首页*/}

                 <TabNavigator.Item
                     title="首页"
                     renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyles} /> }
                     renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyles} />}
                     onPress={() => this.setState({ selectedTab: 'home' })}
                     selected={this.state.selectedTab==='home'}
                     >

                     <Navigator
                         initialRoute={{ name: '首页', component: Home }}
                         configureScene={(route) => {
                             return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                         }}
                         renderScene={(route, navigator) => {
                             let Component = route.component;
                             return <Component {...route.params} navigator={navigator} />
                         }}
                     />
                 </TabNavigator.Item>


                 {/*商家*/}

                 <TabNavigator.Item
                     title="商家"
                     renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyles} /> }
                     renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyles} />}
                     onPress={() => this.setState({ selectedTab: 'shop' })}
                     selected={this.state.selectedTab==='shop'}
                 >

                     <Navigator
                         initialRoute={{ name: '商家', component: Shop }}
                         configureScene={(route) => {
                             return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                         }}
                         renderScene={(route, navigator) => {
                             let Component = route.component;
                             return <Component {...route.params} navigator={navigator} />
                         }}
                     />

                 </TabNavigator.Item>


                 {/*我的*/}

                 <TabNavigator.Item
                     title="我的"
                     renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyles} /> }
                     renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyles} />}
                     onPress={() => this.setState({ selectedTab: 'mine' })}
                     selected={this.state.selectedTab==='mine'}

                 >
                     <Navigator
                         initialRoute={{ name: '我的', component: Mine }}
                         configureScene={(route) => {
                             return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                         }}
                         renderScene={(route, navigator) => {
                             let Component = route.component;
                             return <Component {...route.params} navigator={navigator} />
                         }}
                     />
                 </TabNavigator.Item>


                 {/*更多*/}

                 <TabNavigator.Item
                     title="更多"
                     renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyles} /> }
                     renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyles} />}
                     onPress={() => this.setState({ selectedTab: 'more' })}
                     selected={this.state.selectedTab==='more'}
                     >
                     <Navigator
                         initialRoute={{ name: '更多', component: More }}
                         configureScene={(route) => {
                             return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                         }}
                         renderScene={(route, navigator) => {
                             let Component = route.component;
                             return <Component {...route.params} navigator={navigator} />
                         }}
                     />
                 </TabNavigator.Item>



             </TabNavigator>
        );
    },
    getInitialState(){
        return {
            selectedTab:'home'
        }
    },
});


const styles = StyleSheet.create({
    iconStyles: {
        width:  Platform.OS=='ios'? 30 :25,
        height: Platform.OS=='ios'? 30 :25,
    },
});

//输出组件类
module.exports = Main;

