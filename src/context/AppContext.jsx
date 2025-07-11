import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Efecto para manejar modo oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <AppContext.Provider value={{ language, setLanguage, isDarkMode, setIsDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};
