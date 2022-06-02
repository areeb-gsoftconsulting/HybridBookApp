import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './config/defaultThemeConfig';
import { darkTheme } from './config/darkTheme'
import { useSelector } from 'react-redux';
import { getTheme } from './redux/features/themeSlice';
import StackNavigation from './navigation/StackNavigation';
import { SafeAreaView } from 'react-navigation';


const App = () => {
  const tempTheme = useSelector(getTheme)
  const isDarkTheme = tempTheme.payload.theme.isDark
console.log({isDarkTheme});

  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : theme}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
