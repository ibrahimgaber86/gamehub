import { Burger, Flex, Group, Header, MediaQuery } from "@mantine/core";

import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

type AppHeaderProps = {
  isOpen: boolean;
  toggleNavbar: () => void;
};
const AppHeader = ({ isOpen, toggleNavbar }: AppHeaderProps) => {
  return (
    <Header
      withBorder
      height={{ base: 50, md: 70 }}
      p={{ base: "sm", sm: "md" }}
    >
      <Group noWrap align='center' h={"100%"}>
        <MediaQuery largerThan='sm' styles={{ display: "none" }}>
          <Burger opened={isOpen} onClick={toggleNavbar} />
        </MediaQuery>
        <Logo />
        <SearchInput />
        <ThemeSwitch />
      </Group>
    </Header>
  );
};

export default AppHeader;
