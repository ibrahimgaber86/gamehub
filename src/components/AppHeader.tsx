import { Burger, Flex, Group, Header, MediaQuery } from "@mantine/core";

import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

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
      <Flex justify={"space-between"} align={"center"} h={"100%"}>
        <Group>
          <MediaQuery largerThan='sm' styles={{ display: "none" }}>
            <Burger opened={isOpen} onClick={toggleNavbar} />
          </MediaQuery>
          <Logo />
        </Group>
        <ThemeSwitch />
      </Flex>
    </Header>
  );
};

export default AppHeader;
