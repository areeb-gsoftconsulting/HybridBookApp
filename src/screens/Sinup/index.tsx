import React from 'react';
import { useStyles } from './styles'
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerNavigationParams } from '../../navigation/DrawerNavigationParams';
import { useNavigation } from '@react-navigation/native';
import { initReactI18next, useTranslation } from "react-i18next";



type sinupScreenProp = NativeStackNavigationProp<DrawerNavigationParams, 'Login'>;




const Sinup = () => {
    const styles = useStyles()
    const navigation = useNavigation<sinupScreenProp>();
    const [t, i18n] = useTranslation()


    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    });
    const onSubmit = (data: any) => console.log(data);

    return (
        <View>
            <View style={styles.header}>
            </View>
            <View style={styles.login}>
                <Text style={styles.loginHeading}>{t('SignUpScreen.sinup')}</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder={t('SignUpScreen.namePlaceholder')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="firstName"
                />
                {errors.firstName && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder={t('SignUpScreen.secondName')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="lastName"
                />
                {errors.lastName && <Text>{t('SignUpScreen.requiredMessage')}</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder={t('SignUpScreen.emailPlaceholder')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>{t('SignUpScreen.requiredMessage')}</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder={t('SignUpScreen.passwordPlaceholder')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text>{t('SignUpScreen.requiredMessage')}</Text>}


                <TouchableOpacity>
                    <Text style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
                        {t('SignUpScreen.signupButton')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.regulartxt}>
                    {t('SignUpScreen.loginInstead')}
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Sinup;
