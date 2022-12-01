import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkeModeProvider({ children }) {
  const [darkmode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}
