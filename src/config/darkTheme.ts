import { DarkTheme as PaperDarkTheme } from 'react-native-paper';

export const darkTheme = {
    ...PaperDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        primary: 'white',
        accent: 'gray',
        highlight: '#23191E',
        background: 'black',
        tabBackground:'rgba(64,64,64,0.95)',
        bottomBadge: 'gray',
        tabIcon: 'white',
        tabIconInActive:'rgba(244, 244, 244, 0.65)'


    },
};
