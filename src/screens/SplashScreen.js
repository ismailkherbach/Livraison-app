import React from 'react';
import {StatusBar, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : 'white'}}>
                <StatusBar backgroundColor="white" barStyle="light-content"/>
                <Text style={{ color : '#9C26B0',fontSize : 70 }}>Vinted</Text>
                <Text style={{ color : '#9C26B0',fontSize : 18 }}>Achat et Vente des vetements utilisés</Text>

                <ActivityIndicator color={'#9C26B0'}/>
            </View>
        )
    }
}
