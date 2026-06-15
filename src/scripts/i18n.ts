const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.experience": "Experience",
    "nav.testimonials": "Testimonials",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "hero.available": "Available for opportunities",
    "hero.hire_me": "Hire Me",
    "hero.download_resume": "Download Resume",
    "about.greeting": "Hi, I'm",
    "about.para1": "I am a Full Stack Developer with experience crafting digital solutions that blend creativity with technical excellence. My journey in tech started with curiosity and evolved into a passion for building products that people love to use.",
    "about.para2": "Specializing in Laravel, Astro JS, and modern JavaScript frameworks, I bring ideas to life through clean code, thoughtful architecture, and pixel-perfect design. Every project is an opportunity to push boundaries and create something extraordinary.",
    "about.para3": "When I am not coding, you will find me exploring new technologies, contributing to open source, or sharing knowledge through technical writing and mentoring.",
    "about.name": "Name",
    "about.email": "Email",
    "about.location": "Location",
    "about.availability": "Availability",
    "about.open_to_work": "Open to Work",
    "theme.light": "Light",
    "theme.dark": "Dark",
  },
  bn: {
    "nav.home": "হোম",
    "nav.about": "আমার সম্পর্কে",
    "nav.skills": "দক্ষতা",
    "nav.services": "সেবা",
    "nav.portfolio": "পোর্টফোলিও",
    "nav.experience": "অভিজ্ঞতা",
    "nav.testimonials": "প্রশংসাপত্র",
    "nav.blog": "ব্লগ",
    "nav.contact": "যোগাযোগ",
    "hero.available": "সুযোগের জন্য উপলব্ধ",
    "hero.hire_me": "আমাকে নিয়োগ দিন",
    "hero.download_resume": "রিজিউম ডাউনলোড",
    "about.greeting": "হাই, আমি",
    "about.para1": "আমি একজন ফুল স্ট্যাক ডেভেলপার, দক্ষতার সাথে ডিজিটাল সমাধান তৈরি করি যা সৃজনশীলতা এবং প্রযুক্তিগত উৎকর্ষকে একত্রিত করে। প্রযুক্তিতে আমার যাত্রা কৌতূহল দিয়ে শুরু হয়েছিল এবং এখন মানুষের ভালোবাসার পণ্য তৈরির আবেগে পরিণত হয়েছে।",
    "about.para2": "লারাভেল, অ্যাস্ট্রো জেএস এবং আধুনিক জাভাস্ক্রিপ্ট ফ্রেমওয়ার্কে বিশেষজ্ঞ, আমি পরিষ্কার কোড, চিন্তাশীল আর্কিটেকচার এবং পিক্সেল-পারফেক্ট ডিজাইনের মাধ্যমে আইডিয়াকে বাস্তবে রূপ দিই।",
    "about.para3": "কোডিং না করলে, আপনি আমাকে নতুন প্রযুক্তি অন্বেষণ করতে, ওপেন সোর্সে অবদান রাখতে বা টেকনিক্যাল রাইটিং ও মেন্টরিংয়ের মাধ্যমে জ্ঞান শেয়ার করতে দেখতে পাবেন।",
    "about.name": "নাম",
    "about.email": "ইমেইল",
    "about.location": "অবস্থান",
    "about.availability": "প্রাপ্যতা",
    "about.open_to_work": "কাজের জন্য উন্মুক্ত",
    "theme.light": "লাইট",
    "theme.dark": "ডার্ক",
  },
};

type Locale = 'en' | 'bn';

export function getSavedLocale(): Locale {
  if (typeof localStorage === 'undefined') return 'en';
  const saved = localStorage.getItem('locale') as Locale | null;
  if (saved === 'en' || saved === 'bn') return saved;
  return 'en';
}

export function applyTranslations(locale: Locale) {
  const dict = translations[locale] || translations.en;
  document.documentElement.setAttribute('lang', locale === 'bn' ? 'bn' : 'en');
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });
}

export function initI18n() {
  applyTranslations(getSavedLocale());
}
