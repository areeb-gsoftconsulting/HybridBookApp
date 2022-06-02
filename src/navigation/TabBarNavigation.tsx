import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from "../screens/Explore";
import { MainBottomTabParamList } from './MainBottomTabParams';
import MyFav from "../screens/Fav";
import { View, Text } from 'react-native';
import IconExplore from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Menu from "../screens/Menu";

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

import { useTheme } from "react-native-paper";

const Navigation = () => {

    const { colors } = useTheme()

    return (
        <Tab.Navigator
        
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    position: 'absolute',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: colors.tabBackground,

                },
                
                tabBarActiveTintColor: colors.tabIcon,
                tabBarInactiveTintColor: colors.tabIconInActive,

            }}
        >


            <Tab.Screen name="ExploreScreen" component={Explore}
                options={{
                    
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => {
                        
                        return (
                            <View style={{ flexDirection: 'row', backgroundColor: colors.bottomBadge, padding: 10, paddingLeft: 30, paddingRight: 15, borderRadius: 50 }}>
                                <IconExplore name="search" color={color} size={size} />
                                <Text>Explore</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen name="MyFavScreen" component={MyFav}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ flexDirection: 'row', backgroundColor: colors.bottomBadge, padding: 10, paddingLeft: 30, paddingRight: 15, borderRadius: 50 }}>
                                <IconMaterialIcons name="favorite-border" color={color} size={size} />
                                <Text>Favorite</Text>
                            </View>
                        )
                    }
                }}

            />

            <Tab.Screen name="MenuScreen" component={Menu}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ flexDirection: 'row', backgroundColor: colors.bottomBadge, padding: 10, paddingLeft: 30, paddingRight: 15, borderRadius: 50 }}>
                                <IconEntypo name="menu" color={color} size={size} />
                                <Text>Menu</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigation;

