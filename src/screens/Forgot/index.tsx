import React from 'react';
import { useStyles } from './styles'
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerNavigationParams } from '../../navigation/DrawerNavigationParams';
import { useNavigation } from '@react-navigation/native';
import { initReactI18next, useTranslation } from "react-i18next";


type forgotScreenProp = NativeStackNavigationProp<DrawerNavigationParams, 'Forgot'>;



const Forgot = () => {
    const styles = useStyles()
    const navigation = useNavigation<forgotScreenProp>();
    const [t, i18n] = useTranslation()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
        }
    });
    const onSubmit = (data: any) => console.log(data);

    return (
        <View>
            <View style={styles.header}>

            </View>
            <View style={styles.login}>
                <Text style={styles.loginHeading}>{t('ForgotScreen.forgot')}</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder={t('ForgotScreen.enterEmail')}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>{t('ForgotScreen.requiredMessage')}</Text>}

                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.loginBtn}>
                        {t('ForgotScreen.submitButton')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => { navigation.navigate('Login') }} style={styles.regulartxt}>
                        {t('ForgotScreen.loginInstead')}
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Forgot;
