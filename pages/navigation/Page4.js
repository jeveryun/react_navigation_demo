/**
 * @author: jever
 * @date: 2019/4/24
 * @description:  Page1.js
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Page4 extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎来到Page4
                </Text>
                <Button
                    title={'Open Drawer'}
                    onPress={() => {
                        navigation.openDrawer()
                    }}
                />
                <Button
                    title={'Toggle Drawer'}
                    onPress={() => {
                        navigation.toggleDrawer()
                    }}
                />
                <Button
                    title={'Go Page5'}
                    onPress={() => {
                        navigation.navigate('Page5');
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
        backgroundColor: '#8e8e8e',
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