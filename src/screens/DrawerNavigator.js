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


import {DrawerNavigator,createDrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen'



const AppDrawerNavigator = createDrawerNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: 'Login',
        gesturesEnabled: false,
        headerMode: 'none',
        contentOptions: {
            labelStyle: {
                color: 'white'
            }
        }
    }
);

export default AppDrawerNavigator;
