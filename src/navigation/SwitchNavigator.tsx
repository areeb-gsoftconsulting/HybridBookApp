import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import StackNavigation from './StackNavigation';
import Sinup from '../screens/Sinup';
import Explore from '../screens/Explore';


const AppStack = createSwitchNavigator({routeFour: Explore});
const AuthStack = createSwitchNavigator({ 
    routeOne : Login,
    routeTwo: Sinup
 });

export default createAppContainer(createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },

  ));