import { AppShell } from "@mantine/core";
import AppHeader from "../components/AppHeader";
import Navbar from "../components/AppNavbar";
import { useState } from "react";
import { useColorTheme } from "../theme/ColorThemeProvider";

const Home = () => {
  const { colorTheme } = useColorTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      header={<AppHeader isOpen={isOpen} toggleNavbar={toggleNavbar} />}
      navbar={<Navbar isOpen={isOpen} />}
      bg={colorTheme === "dark" ? "dark.6" : "gray.2"}
    >
      body
    </AppShell>
  );
};

export default Home;
