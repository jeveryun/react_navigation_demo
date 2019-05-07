/**
 * @author: jever
 * @date: 2019/5/7
 * @description:  Home.js
 */
import React, {Component} from 'react'
import {View, Button, Text, StyleSheet} from "react-native";


export default class Home extends Component {
    static navigationOptions = {
        title: '主入口'
    }
    render() {
        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Button
                    title={"Go to Navigation"}
                    onPress={() => {
                        navigation.navigate('NavigationPage')
                    }}
                />
                <Button
                    title={"Go to Lists"}
                    onPress={() => {
                        navigation.navigate('ListPage')
                    }}
                />
            </View>
        )
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
})