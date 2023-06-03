import { BsMoonStarsFill as Moon, BsSunFill as Sun } from "react-icons/bs";
import { Switch } from "@mantine/core";
import { useColorTheme } from "../theme/ColorThemeProvider";

const ThemeSwitch = () => {
  const { colorTheme, toggleTheme } = useColorTheme();

  return (
    <Switch
      onLabel={<Moon color='black' size='2em' />}
      offLabel={<Sun color='gold' size='2em' />}
      checked={colorTheme === "dark"}
      onChange={toggleTheme}
      ml='auto'
      size='md'
    />
  );
};

export default ThemeSwitch;
