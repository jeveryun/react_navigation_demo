/**
 * @author: jever
 * @date: 2019/5/7
 * @description:  SectionListPage.js
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SectionList,
    RefreshControl,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native'


const CITY_NAME = [
    {data: ['北京', '深圳', '广州', '上海'], title: '一线'},
    {data: ['长沙', '成都', '昆明'], title: '二线'},
    {data: ['大理', '娄底', '衡阳'], title: '其他'}
]

export default class SectionListPage extends Component {
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
    _renderSectionHeader({section}) {
        return <View style={styles.sectionHeader}>
            <Text style={styles.text}>{section.title}</Text>
        </View>
    }
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.dataArray}
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
                    renderSectionHeader={(data) => this._renderSectionHeader(data)}
                    ItemSeparatorComponent={() =><View style={styles.separator}></View>}
                ></SectionList>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    item: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
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
    },
    sectionHeader: {
        flex: 1,
        height: 50,
        backgroundColor: '#93ebbe',
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: 'green',
        flex: 1
    }
})