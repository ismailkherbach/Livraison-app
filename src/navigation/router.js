import { createStackNavigator, createAppContainer } from 'react-navigation'
import MenuContainer from './Menu'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

const EntryStack = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
        },
        SignUpForm: {
            screen: HomeScreen,
        },
    },
    {
        headerMode: 'float',
    }
);
const RootStack = createStackNavigator(
    {
        EntryStack: { screen: EntryStack },
    },
    {
        headerMode: 'none',
        initialRouteName: 'EntryStack',
    }
);

export const AppContainer = createAppContainer(RootStack);

