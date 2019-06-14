import React from 'react';
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

//these are the components to be navigated to from the menu
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'


const Menu = createDrawerNavigator(
    {
        "Rick Sanchez": { screen: HomeScreen },
        "Morty Smith": { screen: LoginScreen },

    },
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        initialRouteName: 'Rick Sanchez',
    }
);

const MenuContainer = () => {
    let pressMenu;

    return(
        <React.Fragment>

                    <Icon name="bars" size={30} color="#000000"
                          onPress={() => {
                            pressMenu.dispatch(DrawerActions.toggleDrawer())
                        }}
                    />
                }
            />
            <Menu
                ref={navigatorRef => { pressMenu = navigatorRef}} />

        </React.Fragment>
    )
};
export default MenuContainer
