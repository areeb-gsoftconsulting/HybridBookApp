import React, { useEffect, useState } from 'react';
import { useStyles } from './styles'
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Alert,
    Switch
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerNavigationParams } from '../../navigation/DrawerNavigationParams';
import { useNavigation } from '@react-navigation/native';
import { loginFlag } from '../../redux/features/loginSlice';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { initReactI18next, useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/Ionicons";


type loginScreenProp = NativeStackNavigationProp<DrawerNavigationParams, 'Login'>;

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
}).required();

const Login = () => {
    const styles = useStyles()
    const navigation = useNavigation<loginScreenProp>();
    const dispatch = useDispatch()
    const [isCh, setCh] = useState(false)
    console.log(isCh);
    const [t, i18n] = useTranslation()

    useEffect(() => {
        if (isCh == true) {
            i18n.changeLanguage('ch')
        } else {
            i18n.changeLanguage('en')
        }
    },[isCh])




    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => {
        if (data.email == 'admin@gmail.com' && data.password == '1234') {
            dispatch(loginFlag(true))
            navigation.navigate('DrawerNavigation')
        }
        else {
            Alert.alert("Email/Password Wrong")
        }
    };


    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.welcome}>{t('LoginScreen.welcome')}</Text>
                <Text style={styles.desc}>{t('LoginScreen.welcomeMessage')}</Text>
            </View>
            <View style={styles.login}>
                <Image style={styles.logo} source={require('../../assets/logo.jpeg')} />
                <Text style={styles.loginHeading}>{t('LoginScreen.loginNow')}</Text>
                <Text style={styles.subHeading}>{t('LoginScreen.pleaseLogin')}</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            keyboardType="email-address"
                            placeholder={t('LoginScreen.emailPlaceHolder')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>{t('LoginScreen.requiredMessage')}</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder={t('LoginScreen.passwordPlaceholder')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text>{t('LoginScreen.requiredMessage')}</Text>}

                <TouchableOpacity onPress={() => { navigation.navigate('Forgot') }}>
                    <Text style={styles.forgot}>{t('LoginScreen.forgotPassword')}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
                        {t('LoginScreen.loginButton')}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.subHeading}>{t('LoginScreen.dontHaveAccount')}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Sinup') }}>
                    <Text style={styles.sinup}>{t('LoginScreen.sinup')}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.forgot} onPress={() => { setCh(!isCh) }} size={25} name='language' />
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Login;
