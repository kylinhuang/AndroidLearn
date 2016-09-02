
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Message = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                <Text > Message</Text>

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
module.exports = Message ;
// AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
