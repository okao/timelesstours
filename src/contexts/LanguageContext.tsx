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
    // For non-English languages, use empty translations (fallback to English)
    // In a real app, you would load translations from a static file or bundle
    setTranslations({});
    setIsLoading(false);
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
