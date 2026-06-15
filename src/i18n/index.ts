import en from './en.json';
import bn from './bn.json';

export type Locale = 'en' | 'bn';

const translations: Record<Locale, Record<string, string>> = { en, bn };

export function getSavedLocale(): Locale {
  if (typeof localStorage === 'undefined') return 'en';
  const saved = localStorage.getItem('locale') as Locale | null;
  if (saved === 'en' || saved === 'bn') return saved;
  return 'en';
}

export function t(key: string, locale?: Locale): string {
  const loc = locale || 'en';
  return translations[loc]?.[key] ?? translations['en']?.[key] ?? key;
}

export function applyTranslations(locale: Locale) {
  document.documentElement.setAttribute('lang', locale === 'bn' ? 'bn' : 'en');
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key, locale);
    }
  });
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      el.placeholder = t(key, locale);
    }
  });
}
