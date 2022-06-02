import AsyncStorage from "@react-native-community/async-storage";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import ch from './ch.json';
import en from './en.json';

const LOCALE_PERSISTENCE_KEY = "language";

const languageDetector = {

    type: 'languageDetector',

    async: true,

    detect: async (language) => {

        const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);

        if (!persistedLocale) {

            // Find best available language from the resource ones

            // Return detected locale or default language

            return language("en");

        }

        language(persistedLocale);

    },

    init: () => { },

    cacheUserLanguage: (locale) => {

        AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);

    }

};

i18next

    .use(languageDetector)

    .use(initReactI18next)

    .init({

        // lng: "en",

        resources: {

            en: {

                translation: en

            },

            ch: {

                translation: ch

            }

        }

    });

export default i18next;
