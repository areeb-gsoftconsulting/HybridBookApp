import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyFav from '../screens/Fav';
import IconExplore from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Navigation from './TabBarNavigation';
import Menu from '../screens/Menu';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import ThemeToggle from '../components/ThemeToggle';



function CustomDrawerContent(props: any) {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <ThemeToggle />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const { colors } = useTheme()
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.background,
        },
        drawerActiveBackgroundColor: colors.tabBackground,
        drawerInactiveTintColor: colors.tabIcon,
        drawerType: 'slide',

        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.primary
        },
        headerTintColor: colors.primary
      }}

      drawerContent={(props) => <CustomDrawerContent {...props} />} >

      <Drawer.Screen name="Explore" component={Navigation} options={{
        drawerIcon: (({ color, size }) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <IconExplore name="search" color={color} size={size} />
            </View>
          )
        })
      }} />

      <Drawer.Screen name="MyFav" component={MyFav} options={{
        drawerIcon: (({ color, size }) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <IconMaterialIcons name="favorite-border" color={color} size={size} />
            </View>
          )
        })
      }} />

      <Drawer.Screen name="Menu" component={Menu} options={{
        drawerIcon: (({ color, size }) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <IconEntypo name="menu" color={color} size={size} />
            </View>
          )
        })
      }} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigation