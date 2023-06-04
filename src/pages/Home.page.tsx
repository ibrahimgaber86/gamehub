import { AppShell, Container } from "@mantine/core";
import AppHeader from "../components/AppHeader";
import Navbar from "../components/AppNavbar";
import { useState } from "react";
import { useColorTheme } from "../theme/ColorThemeProvider";
import { Outlet, useLocation, useRoutes } from "react-router-dom";

const Home = () => {
  const { colorTheme } = useColorTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  const { pathname } = useLocation();

  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      header={<AppHeader isOpen={isOpen} toggleNavbar={toggleNavbar} />}
      navbar={
        pathname.startsWith("/games") ? undefined : <Navbar isOpen={isOpen} />
      }
      bg={colorTheme === "dark" ? "dark.6" : "gray.1"}
    >
      <Container>
        <Outlet />
      </Container>
    </AppShell>
  );
};

export default Home;
