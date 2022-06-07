import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import {Settings} from 'react-native-fbsdk-next';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import {Profile} from 'react-native-fbsdk-next';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerNavigationParams} from '../../navigation/DrawerNavigationParams';
import {useNavigation} from '@react-navigation/native';
import {loginFlag} from '../../redux/features/loginSlice';
import {useDispatch} from 'react-redux';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {initReactI18next, useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

type loginScreenProp = NativeStackNavigationProp<
  DrawerNavigationParams,
  'Login'
>;

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const styles = useStyles();
  const navigation = useNavigation<loginScreenProp>();
  const dispatch = useDispatch();
  const [isCh, setCh] = useState(false);
  console.log(isCh);
  const [t, i18n] = useTranslation();
  const [user, setUser] = useState<any>('');

  Settings.setAppID('1428637430893006');
  Settings.initializeSDK();

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId:
        '420464399494-u5npnkj8ljj32kc1msmo1halce3bqe0l.apps.googleusercontent.com',
      webClientId:
        '420464399494-3m834p6ttfah4flm56k182mahhfjd9tn.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });
    isSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      if (user !== '') {
        moveNextScreen();
      }
    } catch (error) {
      if (error === statusCodes.SIGN_IN_CANCELLED) {
        console.log('canceled');

        // user cancelled the login flow
      } else if (error === statusCodes.IN_PROGRESS) {
        console.log('progress');

        // operation (e.g. sign in) is in progress already
      } else if (error === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('not available');

        // play services not available or outdated
      } else {
        console.log(error, 'this error');

        // some other error happened
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////////////////

  useEffect(() => {
    if (isCh == true) {
      i18n.changeLanguage('ch');
    } else {
      i18n.changeLanguage('en');
    }
  }, [isCh]);

  ///////////////////////////////////////

  const moveNextScreen = () => {
    dispatch(loginFlag(true));
    navigation.navigate('DrawerNavigation');
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    if (data.email == 'admin@gmail.com' && data.password == '1234') {
      moveNextScreen();
    } else {
      Alert.alert('Email/Password Wrong');
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
          render={({field: {onChange, onBlur, value}}) => (
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
          render={({field: {onChange, onBlur, value}}) => (
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Forgot');
          }}>
          <Text style={styles.forgot}>{t('LoginScreen.forgotPassword')}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
            {t('LoginScreen.loginButton')}
          </Text>
        </TouchableOpacity>
        <Text style={styles.subHeading}>
          {t('LoginScreen.dontHaveAccount')}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sinup');
          }}>
          <Text style={styles.sinup}>{t('LoginScreen.sinup')}</Text>
        </TouchableOpacity>

        <GoogleSigninButton
          style={styles.googleBtn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />

        <LoginButton
          style={styles.fbLoginBtn}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken()
                .then(data => {
                  console.log(data);
                  moveNextScreen();
                })
                .catch(err => {
                  console.log(
                    '🚀 ~ file: index.tsx ~ line 239 ~ AccessToken.getCurrentAccessToken ~ err',
                    err,
                  );
                });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />

        <TouchableOpacity>
          <Icon
            style={styles.forgot}
            onPress={() => {
              setCh(!isCh);
            }}
            size={25}
            name="language"
          />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Login;
