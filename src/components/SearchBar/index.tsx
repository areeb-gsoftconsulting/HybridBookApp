import React from 'react';
import { useStyles } from './styles'
import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { initReactI18next, useTranslation } from "react-i18next";



const SearchBar = () => {
    const styles = useStyles()
    const [t, i18n] = useTranslation()

    return (
      <View style={styles.searchView}>
        <TextInput
          testID="searchInput"
          placeholder={t('SearchBar.search')}
          style={styles.searchViewInput}
        />
        <TouchableOpacity testID={'searchBookies'}>
          <Icon name="search" size={25} style={styles.searchViewChildren} />
        </TouchableOpacity>
      </View>
    );
};



export default SearchBar;
