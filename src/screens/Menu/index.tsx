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
import { initReactI18next, useTranslation } from "react-i18next";



const Menu = () => {
    const styles = useStyles()
    const [t, i18n] = useTranslation()

    

    return (
       <ScrollView style={styles.main}>
           <View style={styles.container}>
               <Text style={styles.header}>{(t('MenuScreen.preference'))}</Text>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text style={styles.txtAndIcons}>{(t('MenuScreen.account'))}</Text>
                   <Icon style={styles.txtAndIcons} name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text style={styles.txtAndIcons}>{(t('MenuScreen.setting'))}</Text>
                   <Icon style={styles.txtAndIcons} name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text style={styles.txtAndIcons}>{(t('MenuScreen.genre'))}</Text>
                   <Icon style={styles.txtAndIcons} name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text style={styles.txtAndIcons}>{(t('MenuScreen.logout'))}</Text>
               </View>
               <View style={styles.horizontalLine}></View>
           </View>
       </ScrollView>
            
    );
};



export default Menu;
