import { ColorScheme, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import AppColorThemeProvider from "./ColorThemeProvider";
import theme from "./theme";

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorTheme = "dark"] = useLocalStorage<ColorScheme>({
    key: "color-theme",
  });

  return (
    <AppColorThemeProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...theme, colorScheme: colorTheme }}
      >
        {children}
      </MantineProvider>
    </AppColorThemeProvider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppThemeProvider;
