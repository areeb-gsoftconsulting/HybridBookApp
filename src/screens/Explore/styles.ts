import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
    
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            paddingBottom:80,
            paddingTop:50

        },
        heading:{
            fontWeight:'bold',
            fontSize:30,
            color: colors.primary
        },
        horizontalLine:{
            height:1,
            backgroundColor:'gray',
            marginTop:40,
            marginBottom:15,
        },
        header:{
            marginLeft:30,
            marginRight:30,

        },
        regularText:{
            color: colors.primary,
        },
        boldText:{
            color: colors.primary,
            fontWeight:'bold'
        },
        seprator:{
            marginLeft:30,
            marginRight:30,
            marginBottom:5,
            
        }
        
        
    })
    return styles;
}