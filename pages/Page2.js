/**
 * @author: jever
 * @date: 2019/4/24
 * @description:  Page1.js
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

export default class Page2 extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎来到Page2
                </Text>
                <Button
                    title={'Go Back'}
                    onPress={() => {
                        navigation.goBack();
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});