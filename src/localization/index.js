import en from './en';
import es from './es';
import fr from './fr';
import tr from './tr';
import ru from './ru';

const messages = {
  en,
  es,
  fr,
  tr,
  ru,
};

export const langNames = {
  en: 'EN',
  es: 'ES',
  fr: 'FR',
  tr: 'TR',
  ru: 'RU',
};

export const defaultLocale = 'en';

export const locales = Object.keys(langNames);

export default messages;
