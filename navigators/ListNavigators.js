/**
 * @author: jever
 * @date: 2019/5/7
 * @description:  ListNavigators.js
 */
import {createStackNavigator} from "react-navigation"
import FlatListPage from '../pages/list/FlatListPage'
import SwipeableFlatListPage from '../pages/list/SwipeableFlatListPage'
import SectionListPage from '../pages/list/SectionListPage'
import HomePage from '../pages/list/HomePage'

const ListNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            title: 'List Home'
        }
    },
    FlatListPage: {
        screen: FlatListPage,
        navigationOptions: {
            title: 'FlatList'
        }
    },
    SwipeableFlatListPage: {
        screen: SwipeableFlatListPage,
        navigationOptions: {
            title: 'SwipeableFlatList'
        }
    },
    SectionListPage: {
        screen: SectionListPage,
        navigationOptions: {
            title: 'SectionList'
        }
    }
})

export default ListNavigator