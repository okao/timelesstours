import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  getText: (key: string, fallback?: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    // Listen for language change events
    const handleLanguageChange = (event: CustomEvent) => {
      const newLanguage = event.detail.language;
      setCurrentLanguage(newLanguage);
      loadTranslations(newLanguage);
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
  }, []);

  useEffect(() => {
    // Load translations when language changes
    loadTranslations(currentLanguage);
  }, [currentLanguage]);

  const loadTranslations = async (language: string) => {
    if (language === 'en') {
      setTranslations({});
      return;
    }

    setIsLoading(true);
    try {
      // Get all text keys that have been used in the app
      const textKeys = [
        'navbar.home', 'navbar.tours', 'navbar.about', 'navbar.testimonials', 'navbar.faq', 'navbar.contact', 'navbar.book',
        'footer.company', 'footer.description', 'footer.quicklinks', 'footer.contact', 'footer.newsletter', 'footer.newsletter.desc', 'footer.newsletter.placeholder', 'footer.newsletter.button', 'footer.copyright',
        'hero.title', 'hero.subtitle', 'hero.cta',
        'about.title', 'about.body',
        'featured.title', 'featured.subtitle', 'featured.button',
        'why.title', 'why.subtitle', 'why.expertise.title', 'why.expertise.desc', 'why.safety.title', 'why.safety.desc', 'why.service.title', 'why.service.desc',
        'testimonials.title',
        'cta.title', 'cta.subtitle', 'cta.button',
        'contact.hero.title', 'contact.hero.subtitle', 'contact.form.title', 'contact.form.name.label', 'contact.form.name.placeholder', 'contact.form.email.label', 'contact.form.email.placeholder', 'contact.form.phone.label', 'contact.form.phone.placeholder', 'contact.form.tour.label', 'contact.form.tour.placeholder', 'contact.form.message.label', 'contact.form.message.placeholder', 'contact.form.submit', 'contact.form.success.title', 'contact.form.success.message', 'contact.info.title', 'contact.info.phone.title', 'contact.info.phone.number', 'contact.info.phone.desc', 'contact.info.email.title', 'contact.info.email.address', 'contact.info.email.desc', 'contact.info.whatsapp.title', 'contact.info.whatsapp.number', 'contact.info.whatsapp.desc', 'contact.info.location.title', 'contact.info.location.address', 'contact.info.location.desc',
        'testimonials.hero.title', 'testimonials.hero.subtitle', 'testimonials.featured.title', 'testimonials.featured.subtitle', 'testimonials.more.title', 'testimonials.more.subtitle', 'testimonials.stats.title', 'testimonials.stats.subtitle', 'testimonials.stats.travelers', 'testimonials.stats.rating', 'testimonials.stats.destinations', 'testimonials.stats.recommend', 'testimonials.cta.title', 'testimonials.cta.subtitle', 'testimonials.cta.browse', 'testimonials.cta.contact',
        'faq.hero.title', 'faq.hero.subtitle', 'faq.section.title', 'faq.section.subtitle', 'faq.help.title', 'faq.help.subtitle', 'faq.help.call.title', 'faq.help.call.desc', 'faq.help.call.number', 'faq.help.call.hours', 'faq.help.email.title', 'faq.help.email.desc', 'faq.help.email.address', 'faq.help.email.response', 'faq.help.chat.title', 'faq.help.chat.desc', 'faq.help.chat.button', 'faq.help.chat.availability', 'faq.topics.title', 'faq.topics.subtitle'
      ];

      const response = await fetch('/api/texts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keys: textKeys, lang: language })
      });

      if (response.ok) {
        const data = await response.json();
        setTranslations(data);
      }
    } catch (error) {
      console.error('Failed to load translations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getText = (key: string, fallback?: string): string => {
    if (currentLanguage === 'en') {
      return fallback || key;
    }
    return translations[key] || fallback || key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setCurrentLanguage,
    getText,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
