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
import Icon from 'react-native-vector-icons/AntDesign'


const Menu = () => {
    const styles = useStyles()
    

    return (
       <ScrollView style={styles.main}>
           <View style={styles.container}>
               <Text style={styles.header}>Preference</Text>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text style={styles.txtAndIcons}>ACCOUNT</Text>
                   <Icon style={styles.txtAndIcons} name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text style={styles.txtAndIcons}>SETTING</Text>
                   <Icon style={styles.txtAndIcons} name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text style={styles.txtAndIcons}>GENRES PREFERENCE</Text>
                   <Icon style={styles.txtAndIcons} name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text style={styles.txtAndIcons}>LOGOUT</Text>
               </View>
               <View style={styles.horizontalLine}></View>
           </View>
       </ScrollView>
            
    );
};



export default Menu;
