import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation'
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from '../screens/HomeScreen'
import DrawerNavigator from '../screens/DrawerNavigator'


const AppStackNavigator = new StackNavigator ({
    HomeScreen:{screen:HomeScreen},
    LoginScreen:{screen:LoginScreen},
},{
    headerMode:'none',
    initialRouteName :'HomeScreen',
    navigationOptions:{
        gesturesEnabled:false
    }
});
export default AppStackNavigator;
