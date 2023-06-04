import { Burger, Group, Header, MediaQuery } from "@mantine/core";

import Logo from "./Logo";
import SearchInput from "./SearchInput";
import ThemeSwitch from "./ThemeSwitch";
import { useLocation } from "react-router-dom";

type AppHeaderProps = {
  isOpen: boolean;
  toggleNavbar: () => void;
};
const AppHeader = ({ isOpen, toggleNavbar }: AppHeaderProps) => {
  const { pathname } = useLocation();
  return (
    <Header
      withBorder
      height={{ base: 50, md: 70 }}
      p={{ base: "sm", sm: "md" }}
    >
      <Group noWrap align='center' h={"100%"}>
        {!pathname.startsWith("/games") && (
          <MediaQuery largerThan='sm' styles={{ display: "none" }}>
            <Burger opened={isOpen} onClick={toggleNavbar} />
          </MediaQuery>
        )}
        <Logo />
        <SearchInput />
        <ThemeSwitch />
      </Group>
    </Header>
  );
};

export default AppHeader;
