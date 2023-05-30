import { createContext, useCallback, useContext } from "react";

import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

type colorThemeContextObject = {
  colorTheme: ColorScheme;
  toggleTheme: () => void;
};

const colorThemeContext = createContext<colorThemeContextObject>(
  {} as colorThemeContextObject
);

const AppColorThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorTheme, setColorTheme] = useLocalStorage<ColorScheme>({
    key: "color-theme",
    defaultValue: "dark",
  });

  const toggleTheme = useCallback(() => {
    setColorTheme((theme) => (theme === "dark" ? "light" : "dark"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <colorThemeContext.Provider value={{ colorTheme, toggleTheme }}>
      {children}
    </colorThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useColorTheme = () => useContext(colorThemeContext);
export default AppColorThemeProvider;
