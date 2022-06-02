import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';
import { useTheme } from 'react-native-paper';
export const useStyles = () => {
    const {colors} = useTheme()

    const styles = StyleSheet.create({
        
        searchViewChildren: {
            marginRight: 15,
            color: colors.primary
        },
        
        searchView: {
            marginBottom: 20,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 50,
            alignSelf: 'center',
            width: '90%',
            borderColor: 'grey',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 5,
            backgroundColor: colors.bottomBadge
        },
        searchViewInput: {
            margin: 2,
            marginLeft: 5,
            width: wp('75%'),
            color:colors.primary
        },
        
        
    })
    return styles;
}