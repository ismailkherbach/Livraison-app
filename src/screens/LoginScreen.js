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

export default class LoginScreen extends Component{

    static navigationOptions = {
        drawerLabel:'LoginScreen',

    };
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View>
                <Text>LoginScreen</Text>
            </View>
        )
    }
}
