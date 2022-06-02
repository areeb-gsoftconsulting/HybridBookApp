import React from 'react';
import { useStyles } from './styles'
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';





const SplashScreen = () => {
    const styles = useStyles()

    return (
        <View style={styles.container}>
            <View style={styles.innerDiv}></View>
            <Image
            style={styles.logo}
            source={require('../../assets/logo.jpeg')}
            />
            <View style={styles.innerDiv}></View>
        </View>

    );
};



export default SplashScreen;
