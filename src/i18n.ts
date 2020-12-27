import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export type TranslationSchema = {
  description: string;
  projects: string;
  skills: string;
  hireme: string;
  contacts: string;
};

type Resources = {
  [lang: string]: {
    translation: TranslationSchema;
  };
};

const resources: Resources = {
  en: {
    translation: {
      description:
        "i am a frontend developer. i love to design and bring to live web apps, always eager to learn and make cool stuff, let's make something great together.",
      projects: 'projects',
      skills: 'skills',
      hireme: 'hire me',
      contacts: 'contacts',
    },
  },
  ru: {
    translation: {
      description:
        'я фронтенд-разработчик. я люблю заниматься дизайном и воплощать в жизнь веб-приложения, вечно жадный до знаний и новых технологий, давайте создадим что-нибудь выдающееся вместе.',
      projects: 'проекты',
      skills: 'навыки',
      hireme: 'найми меня',
      contacts: 'контакты',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
