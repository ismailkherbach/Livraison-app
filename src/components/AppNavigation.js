import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    LoginScreen: { screen: LoginScreen }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LoginScreen'
});

export default PrimaryNav
