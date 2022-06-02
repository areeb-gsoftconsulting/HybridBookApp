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

type ExploreScreenProp = BottomTabNavigationProp<MainBottomTabParamList, 'ExploreScreen'>;

const Explore = () => {
    const styles = useStyles()
    return (
        <ScrollView>
            <View style={styles.container}>
                <SearchBar />
                <View style={styles.header}>
                    <Text style={styles.heading}>Hi Jorge</Text>
                    <Text style={styles.regularText}>Let's find something new...</Text>
                </View>
                <View style={styles.seprator}>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.boldText}>Trending</Text>
                </View>
                <BookCard />
                <View style={styles.seprator}>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.boldText}>New releases</Text>
                </View>
                <BookCard />
                <View style={styles.seprator}>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.boldText}>Selected for you</Text>
                </View>
                <BookCard />
            </View>
        </ScrollView>
    );
};


export default Explore;
