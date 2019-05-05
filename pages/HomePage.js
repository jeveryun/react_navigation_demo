/**
 * @author: jever
 * @date: 2019/4/24
 * @description:  HomePage.js
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


export default class HomePage extends Component {
    static navigationOptions = {
        title: "Home",
        headerBackTitle:'返回哈哈'
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Button
                    title={"Go to page1"}
                    onPress={() => {
                        navigation.navigate('Page1', {name: '动态的'})
                    }}
                />
                <Button
                    title={"Go to page2"}
                    onPress={() => {
                        navigation.navigate('Page2')
                    }}
                />
                <Button
                    title={"Go to page3"}
                    onPress={() => {
                        navigation.navigate('Page3', {title:'title Page 3'})
                    }}
                />
                <Button
                    title={"Go to TabNavigator"}
                    onPress={() => {
                        navigation.navigate('TabNav', {title:'Go to TabNavigator'})
                    }}
                />
            </View>
        );
    }
}

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
