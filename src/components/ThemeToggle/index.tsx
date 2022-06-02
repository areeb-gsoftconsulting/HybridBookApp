import React, {useState} from "react";
import { View} from "react-native";
import { Switch, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { getTheme } from "../../redux/features/themeSlice";

const ThemeToggle =()=>{

    const tempTheme = useSelector(getTheme);
    const currentTheme = tempTheme.payload.theme.isDark

    const dispatch = useDispatch()

    return(
        <View>
            <Switch
            value={currentTheme}
            onValueChange={()=>{dispatch(getTheme(!currentTheme))}}
            />
        </View>
    )
}

export default ThemeToggle