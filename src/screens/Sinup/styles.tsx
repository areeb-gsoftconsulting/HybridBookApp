import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

export const useStyles = () => {
    const styles = StyleSheet.create({
        header:{
            backgroundColor:'blue',
            paddingTop:40,
            paddingBottom:60,
            paddingLeft:20,
            paddingRight:20

        },
        welcome:{
            textAlign:'center',
            fontSize:30,
            fontWeight:'bold',
            color:'white'
        },
        desc:{
            textAlign:'center',
            color:'white'
        },
        login:{
            paddingBottom:30,
            paddingLeft:20,
            paddingRight:20,
            width:wp('85%'),
            backgroundColor:'white',
            borderRadius:8,
            marginTop:-15,
            alignSelf:'center'
        },
        logo:{
            width:150,
            height:150,
            resizeMode:'contain',
            alignSelf:'center'
        },
        loginHeading:{
            fontSize:30,
            color:'blue',
            textAlign:'center',
            fontWeight:'bold'
        },
        subHeading:{
            textAlign:'center'
        },
        txtInput:{
            paddingLeft:40,
            paddingRight:40,
        },
        loginBtn:{
            color:'white',
            backgroundColor:'blue',
            padding:15,
            borderRadius:25,
            textAlign:'center',
            fontWeight:'bold'
        },
        sinup:{
            textAlign:'center',
            color:'blue'
        },
        regulartxt:{
            textAlign:'center',
            marginTop:15,
            color:'blue',
            textDecorationLine:'underline'
        }
        
        
    })
    return styles;
}