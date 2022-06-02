import React from 'react';
import { useStyles } from './styles'
import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const SearchBar = () => {
    const styles = useStyles()
    return (
        <View style={styles.searchView}>
            <TextInput
                placeholder='Search Here'
                style={styles.searchViewInput}
            />
            <TouchableOpacity >
                <Icon name="search" size={25} style={styles.searchViewChildren} />
            </TouchableOpacity>
        </View>


    );
};



export default SearchBar;
