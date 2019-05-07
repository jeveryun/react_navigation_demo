/**
 * @author: jever
 * @date: 2019/4/24
 * @description:  AppNavigators.js
 */

import {createStackNavigator, createAppContainer} from "react-navigation"

import NavigationPage from './NavigationNavigators'
import ListPage from './ListNavigators'
import Home from '../pages/Home'

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    NavigationPage: {
        screen: NavigationPage
    },
    ListPage: {
        screen: ListPage
    }
})

export default createAppContainer(AppStackNavigator)