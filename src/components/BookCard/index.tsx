import React, { useState } from 'react';
import booksJson from '../../dummy.json'
import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { useStyles } from './styles';

import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {DrawerNavigationParams} from '../../navigation/DrawerNavigationParams'
import { useNavigation } from '@react-navigation/native';

type BookCard = NativeStackNavigationProp<DrawerNavigationParams, 'BookCard'>;




const BookCard = () => {
    const [books, setBooks] = useState<any>(booksJson)

    const navigation = useNavigation<BookCard>()

    const styles = useStyles()
    return (

        <ScrollView horizontal={true}>
            {books.map((obj: any, i: number) => {

                return (
                    <View key={i} style={styles.bookCard}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('BookDetails')}}>
                        <Image style={styles.bookStyle} source={{uri:`${obj.img}`}} />
                        <Text style={styles.bookName}>{obj.title}</Text>
                        <Text style={styles.bookName}>{obj.author}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollView>



    );
};



export default BookCard;
