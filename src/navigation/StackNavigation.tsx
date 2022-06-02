import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Sinup from '../screens/Sinup';
import Forgot from '../screens/Forgot';
import DrawerNavigation from './DrawerNavigation';
import BookDetails from '../screens/BookDetails';
import BookCard from '../components/BookCard';
import SplashScreen from 'react-native-splash-screen'
import { useSelector } from 'react-redux';
import {loginFlag} from '../redux/features/loginSlice'


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    const isSignIn = useSelector(payload => payload.login.isLoggedIn)
    

    useEffect(() => {
        SplashScreen.hide();
    },[])
    
    return (
        
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {isSignIn ? 
            <>
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            <Stack.Screen name="BookDetails" component={BookDetails} />
            <Stack.Screen name="BookCard" component={BookCard} />
            </>
            :
            <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sinup" component={Sinup} />
            <Stack.Screen name="Forgot" component={Forgot} />
            </>
            
        }
         </Stack.Navigator>
    )

}




export default StackNavigation