import React from 'react';
import { useStyles } from './styles'
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import BookCard from '../../components/BookCard';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../../navigation/MainBottomTabParams'
import SearchBar from '../../components/SearchBar';
import { initReactI18next, useTranslation } from "react-i18next";


type ExploreScreenProp = BottomTabNavigationProp<MainBottomTabParamList, 'ExploreScreen'>;

const Explore = () => {
    const styles = useStyles()
    const [t, i18n] = useTranslation()

    return (
        <ScrollView>
            <View style={styles.container}>
                <SearchBar />
                <View style={styles.header}>
                    <Text style={styles.heading}>{t('ExploreScreen.hi')} Jorge</Text>
                    <Text style={styles.regularText}>{t('ExploreScreen.tagline')}.</Text>
                </View>
                <View style={styles.seprator}>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.boldText}>{t('ExploreScreen.trending')}</Text>
                </View>
                <BookCard />
                <View style={styles.seprator}>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.boldText}>{t('ExploreScreen.newReleases')}</Text>
                </View>
                <BookCard />
                <View style={styles.seprator}>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.boldText}>{t('ExploreScreen.selectedForYou')}</Text>
                </View>
                <BookCard />
            </View>
        </ScrollView>
    );
};


export default Explore;
