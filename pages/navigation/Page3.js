/**
 * @author: jever
 * @date: 2019/4/24
 * @description:  Page1.js
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

export default class Page3 extends Component {
    render() {
        const {navigation} = this.props;
        console.log(navigation)
        const {state, setParams} = navigation;
        const {params} = state;
        const showText = params.mode === 'edit' ? '正在编辑' : '编辑完成';
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
                <Text>{showText}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        setParams({title: text})
                    }}
                />

                <Button
                    title={'改变主题'}
                    onPress={() => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'pink',
                                updateTime: new Date().getTime()
                            }
                        })
                    }}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    input: {
        width: 360,
        height: 50,
        borderWidth: 1,
        marginTop: 20,
        borderColor: 'black'
    },
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