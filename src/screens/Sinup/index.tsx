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


type sinupScreenProp = NativeStackNavigationProp<DrawerNavigationParams, 'Login'>;




const Sinup = () => {
    const styles = useStyles()
    const navigation = useNavigation<sinupScreenProp>();

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
                <Text style={styles.loginHeading}>Sign Up</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder='enter your first name'
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
                            placeholder='enter your Last Name'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="lastName"
                />
                {errors.lastName && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder='enter your Email'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder='enter your Password'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text>This is required.</Text>}


                <TouchableOpacity>
                    <Text style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={styles.regulartxt}>
                        Login instead
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Sinup;
