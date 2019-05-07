/**
 * @author: jever
 * @date: 2019/5/7
 * @description:  FlatListPage.js
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList, RefreshControl, ActivityIndicator} from 'react-native'


// const CITY_NAME = ['北京', '深圳', '广州', '上海', '长沙', '成都', '昆明', '丽江', '大理', '泸定', '桂林', '北海', '厦门', '六安', '贵阳', '安顺', '兰州', '衡阳', '娄底', '邵阳']
const CITY_NAME = ['北京', '深圳', '广州', '上海', '长沙', '成都', '昆明']
export default class FlatListPage extends Component {
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
                for (let i = this.state.dataArray.length-1; i >= 0; i --) {
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

    render() {
        return (
            <View style={styles.container}>
                <FlatList
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
                ></FlatList>
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
        height:200,
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
    }
})