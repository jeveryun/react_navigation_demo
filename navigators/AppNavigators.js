/**
 * @author: jever
 * @date: 2019/4/24
 * @description:  AppNavigators.js
 */
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'

const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2
    }
}, {
    defaultNavigationOptions: {
        header: null
    }
})

export default createAppContainer(AppStackNavigator)