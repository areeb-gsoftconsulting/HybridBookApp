import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';


export const useStyles = () => {

    const { colors } = useTheme()


    const styles = StyleSheet.create({
        bookCard: {
            paddingLeft: 30,
            paddingBottom: 10,
            paddingRight: 5
        },
        bookName: {
            color: colors.primary,
            marginBottom: 5
        },
        bookStyle: {
            height: 190,
            width: 140,
            resizeMode: 'contain',
            borderRadius: 4
        }


    })
    return styles;
}