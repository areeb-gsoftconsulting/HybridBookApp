import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';


declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            tabBackground: string;
            bottomBadge: string;
            tabIcon:string;
            tabIconInActive:string

        }
    }
}


export const theme = {
    ...PaperDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        primary: 'black',
        accent: 'white',
        highlight: '#FAF9F6',
        background: 'white',
        tabBackground: 'rgba(244, 244, 244, 0.95)',
        bottomBadge: 'white',
        tabIcon: 'blue',
        tabIconInActive:'gray'

    },

};