
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Find = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                <Text > Find</Text>

            </View>
        );
    }
})



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
});

//输出
module.exports = Find ;
// AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
