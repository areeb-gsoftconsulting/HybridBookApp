import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { langFlag } from "../../redux/features/langSlice";
import { initReactI18next, useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from 'react-native-paper';



const Lang = () => {
    const tempLang = useSelector(langFlag)
    const setLang = tempLang.payload.lang.isChinese
    const [t, i18n] = useTranslation()
    const dispatch = useDispatch()
    const { colors } = useTheme();

    

    useEffect(() => {
        if (setLang == true) {
            i18n.changeLanguage('ch')
        } else {
            i18n.changeLanguage('en')
        }
    }, [setLang])




    return (
        <View>
            <TouchableOpacity onPress={() => { dispatch(langFlag(!setLang)) }}>
                <Icon style={{color:colors.primary, padding:15}} size={25} name='language' />
            </TouchableOpacity>
        </View>
    )
}

export default Lang