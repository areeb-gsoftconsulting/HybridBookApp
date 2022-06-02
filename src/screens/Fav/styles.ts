import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

export const useStyles = () => {
    const {colors} = useTheme()
     const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            paddingBottom:50,
            paddingTop:50,
        },
        heading:{
            fontWeight:'bold',
            fontSize:30,
            color:colors.primary,
            marginBottom:30
        },
        
        header:{
            marginLeft:30,
            marginRight:30,
        },
        regularText:{
            color:colors.primary,
            marginBottom:5
        },
        boldText:{
            color:colors.primary,
            fontWeight:'bold'
        },
        books:{
            width:135,
            height:190,
            resizeMode:'contain',
            borderRadius:4,
            marginTop:15,
        },
        booksContainer:{
            marginLeft:30,
            marginRight:30
        },
        booksShop:{
            alignSelf:'center',
            display:'flex',
            flexDirection:'row',
            width:wp('100%'),
            flexWrap:'wrap',
            alignContent:'center',
            
        }
        
        
    })
    return styles;
}