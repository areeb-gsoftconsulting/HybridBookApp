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

type forgotScreenProp = NativeStackNavigationProp<DrawerNavigationParams, 'Forgot'>;



const Forgot = () => {
    const styles = useStyles()
    const navigation = useNavigation<forgotScreenProp>();

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
                <Text style={styles.loginHeading}>Forgot Password</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder='enter your email'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>This is required.</Text>}

                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.loginBtn}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={()=>{navigation.navigate('Login')}} style={styles.regulartxt}>
                        Login instead
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Forgot;
