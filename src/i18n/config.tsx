import i18next from 'i18next';

i18next
.init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: {
            translations: require('../assets/i18n/en.json')
        },
        es: {
            translations: require('../assets/i18n/es.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    // debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, 
    },
    react: {
        wait: true,
    },
});

i18next.languages = ['en', 'es'];

export default i18next;
