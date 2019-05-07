/**
 * @author: jever
 * @date: 2019/5/7
 * @description:  ListNavigators.js
 */
import {createStackNavigator} from "react-navigation"
import FlatListPage from '../pages/list/FlatListPage'
import HomePage from '../pages/list/HomePage'

const ListNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    FlatListPage: {
        screen: FlatListPage
    }
})

export default ListNavigator