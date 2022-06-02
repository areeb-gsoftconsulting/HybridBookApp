import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

import { useTheme } from 'react-native-paper';


export const useStyles = () => {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        main:{
            backgroundColor:colors.background
        },
        container:{
            paddingTop:30,
            paddingBottom:60,
            paddingLeft:30,
            paddingRight:30,
            backgroundColor:colors.background,

        },
        header:{
            fontSize:30,
            color: colors.primary,
            fontWeight:'bold',
            marginBottom:20
        },
        horizontalLine:{
            height:1,
            backgroundColor:'gray',
            marginTop:15,
            marginBottom:15,
        },
        listItems:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        txtAndIcons:{
            color:colors.primary
        }
        
        
    })
    return styles;
}