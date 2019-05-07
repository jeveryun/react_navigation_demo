/**
 * @author: jever
 * @date: 2019/5/7
 * @description:  SwipeableFlatListPage.jse.js
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SwipeableFlatList,
    RefreshControl,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native'


const CITY_NAME = ['北京', '深圳', '广州', '上海', '长沙', '成都', '昆明']

export default class SwipeableFlatListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            dataArray: CITY_NAME
        }
    }

    loadData(refreshing) {
        if (refreshing) {
            this.setState({
                isLoading: true
            })
        }
        setTimeout(() => {
            let dataArray = [];
            if (refreshing) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i]);
                }
            } else {
                dataArray = this.state.dataArray.concat(CITY_NAME)
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000)
    }

    _renderItem(data) {
        return <View style={styles.item} key={data.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    }

    genIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }

    genQuickAction() {
        return <View style={styles.quickContainer}>
            <TouchableHighlight
                onPress={() => {
                    alert('确认删除')
                }}
            >
                <View style={styles.quick}>
                    <Text style={styles.text}>删除</Text>
                </View>
            </TouchableHighlight>
        </View>
    }

    render() {
        return (
            <View style={styles.container}>
                <SwipeableFlatList
                    data={this.state.dataArray}
                    renderItem={(data) => this._renderItem(data)}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['red']}
                            tintColor={'orange'}
                            titleColor={'red'}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.loadData(true);
                            }}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.loadData()
                    }}
                    renderQuickActions={() => this.genQuickAction()}
                    maxSwipeDistance={100}
                    bounceFirstRowOnMount={false}
                ></SwipeableFlatList>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#169',
        height: 100,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        color: 'red',
        margin: 10
    },
    quickContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 15,
        marginBottom: 15
    },
    quick: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
        width: 100,
    }
})