/**
 * @author: jever
 * @date: 2019/5/7
 * @description:  HomePage.js
 */
import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default class HomePage extends Component{
    static navigationOptions = {
        title: 'Lists'
    }
    render() {
        const {navigation}  = this.props;
        return (
            <View style={styles.container}>
                <Button
                    title={'Go To FlatList'}
                    onPress={() => {
                        navigation.navigate('FlatListPage')
                    }}
                ></Button>
                <Button
                    title={'Go To SwipeableFlatList'}
                    onPress={() => {
                        navigation.navigate('SwipeableFlatListPage')
                    }}
                ></Button>
                <Button
                    title={'Go To SectionList'}
                    onPress={() => {
                        navigation.navigate('SectionListPage')
                    }}
                ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})