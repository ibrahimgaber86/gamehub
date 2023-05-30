import { Navbar, Text } from "@mantine/core";

type AppNavbarProps = {
  isOpen: boolean;
};
const AppNavbar = ({ isOpen }: AppNavbarProps) => {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!isOpen}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </Navbar>
  );
};

export default AppNavbar;
