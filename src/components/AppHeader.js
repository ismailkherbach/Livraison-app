import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Switch
} from 'react-native'
import { Appbar } from 'react-native-paper';

export default class AppHeader extends React.Component {
    _goBack = () => console.log('Went back');

    render() {
        return (
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction
                    onPress={this._goBack}
                />
                <Appbar.Content
                    title="Vinted"
                />

            </Appbar.Header>
        );
    }
}

const styles = StyleSheet.create({
    header :{
        backgroundColor:'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 2,
    }
})
