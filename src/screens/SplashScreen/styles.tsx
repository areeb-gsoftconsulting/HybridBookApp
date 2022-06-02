import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

export const useStyles = () => {
    const styles = StyleSheet.create({
        logo:{
            flex:1,
            justifyContent:'center',
            alignSelf:'center',
            height:150,
            width:150,
            resizeMode:'contain'
        },
        container:{
            flex:1,
            backgroundColor:'aqua'
        },
        innerDiv:{
            flex:1
        }
        
    })
    return styles;
}