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
        book:{
            width:wp('40%'),
            height:hp('30%'),
            resizeMode:'contain',
            alignSelf:'center',
            borderRadius:5
        },
        heading:{
            marginTop:20,
            textAlign:'center',
            fontSize:wp('7%'),
            fontWeight:'bold',
            color:colors.primary
        },
        subHeading:{
            textAlign:'center',
            fontSize:wp('5%'),
            color:colors.placeholder
        },
        horizontalLine:{
            height:1,
            backgroundColor:colors.placeholder,
            marginTop:20,
            marginBottom:20,
            
        },
        loweDiv:{
            marginLeft:30,
            marginRight:30
        },
        rowDiv:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            flex:1,
            paddingBottom:30
        },
        genero:{
            color:colors.placeholder,
            flex:0.5
        },
        launch:{
            color:colors.placeholder,
            flex:0.25
        },
        size:{
            color:colors.placeholder,
            flex:0.25
        },
        boldText:{
            color:colors.placeholder,
            fontWeight:'bold'
        },
        details:{
            color:colors.primary
        },
        launchTxt:{
            color:colors.placeholder
        }
        
        
    })
    return styles;
}