import { Navbar } from "@mantine/core";
import GenresList from "./GenresList";

type AppNavbarProps = {
  isOpen: boolean;
  closeNavbar: () => void;
};
const AppNavbar = ({ isOpen, closeNavbar }: AppNavbarProps) => {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!isOpen}
      width={{ sm: 200, lg: 300 }}
    >
      <GenresList closeNavbar={closeNavbar} />
    </Navbar>
  );
};

export default AppNavbar;
