import { Navbar } from "@mantine/core";
import GenresList from "./GenresList";

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
      <GenresList />
    </Navbar>
  );
};

export default AppNavbar;
