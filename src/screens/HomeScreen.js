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

export default class HomeScreen extends Component{

    static navigationOptions = {
        drawerLabel:'HomeScreen',

    };
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <TouchableOpacity style={styles.buttonLogout} onPress={() => this.props.navigation.openDrawer()}>
                    <Text style={styles.buttonLogoutText}>Go to HomeScreen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
})
