import React from 'react';
import { useStyles } from './styles'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import { initReactI18next, useTranslation } from "react-i18next";



const MyFav = () => {
    const styles = useStyles()
    const [t, i18n] = useTranslation()

    return (
        <ScrollView>
            <View style={styles.container}>
                <SearchBar />
                <View style={styles.header}>
                    <Text style={styles.heading}>{t('FavScreen.MyFav')}</Text>
                </View>
                <View style={styles.booksShop}>
                    <View style={styles.booksContainer}>
                        <Image style={styles.books} source={require('../../assets/bookCover.jpeg')} />
                        <Text style={styles.regularText}>Any Name</Text>
                        <Text style={styles.regularText}>Author</Text>
                    </View>
                    <View style={styles.booksContainer}>
                        <Image style={styles.books} source={require('../../assets/bookCover.jpeg')} />
                        <Text style={styles.regularText}>Any Name</Text>
                        <Text style={styles.regularText}>Author</Text>
                    </View>
                    <View style={styles.booksContainer}>
                        <Image style={styles.books} source={require('../../assets/bookCover.jpeg')} />
                        <Text style={styles.regularText}>Any Name</Text>
                        <Text style={styles.regularText}>Author</Text>
                    </View><View style={styles.booksContainer}>
                        <Image style={styles.books} source={require('../../assets/bookCover.jpeg')} />
                        <Text style={styles.regularText}>Any Name</Text>
                        <Text style={styles.regularText}>Author</Text>
                    </View><View style={styles.booksContainer}>
                        <Image style={styles.books} source={require('../../assets/bookCover.jpeg')} />
                        <Text style={styles.regularText}>Any Name</Text>
                        <Text style={styles.regularText}>Author</Text>
                    </View><View style={styles.booksContainer}>
                        <Image style={styles.books} source={require('../../assets/bookCover.jpeg')} />
                        <Text style={styles.regularText}>Any Name</Text>
                        <Text style={styles.regularText}>Author</Text>
                    </View>
                </View>

                <Text style={[{ textAlign: 'center', padding: 50 },styles.regularText]}>{t('FavScreen.end')}</Text>
            </View>
        </ScrollView>
    );
};



export default MyFav;
