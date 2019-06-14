import React, {
    Component
} from 'react'

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Switch
} from 'react-native'


import {DrawerNavigator,createDrawerNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen'



const AppDrawerNavigator = createDrawerNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: 'HomeScreen',
        gesturesEnabled: false,
        headerMode: 'none',
        contentOptions: {

        }
    }
);

const AppContainer = createAppContainer(AppDrawerNavigator);


export default AppContainer;
