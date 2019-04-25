/**
 * @author: jever
 * @date: 2019/4/24
 * @description:  AppNavigators.js
 */
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import React from 'react'
import {Button} from 'react-native'


const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面`
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'Page2',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title:params.title?params.title:'This is Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit'? '保存': '编辑'}
                        onPress={() => {
                            setParams({mode:params.mode === 'edit'? '':'edit'})
                        }}
                    />
                )
            }
        }
    }
}, {
    // defaultNavigationOptions: {
    //     header: null
    // }
})

export default createAppContainer(AppStackNavigator)