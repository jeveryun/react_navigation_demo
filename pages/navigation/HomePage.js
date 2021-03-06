/**
 * @author: jever
 * @date: 2019/4/24
 * @description:  HomePage.js
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


export default class HomePage extends Component {
    static navigationOptions = {
        title: "Navigation",
        headerBackTitle:'返回哈哈'
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
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
                <Button
                    title={"Go to DrawerNavigator"}
                    onPress={() => {
                        navigation.navigate('DrawerNav', {title:'Go to DrawerNavigator'})
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
