import { AppShell, Container } from "@mantine/core";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import { useColorTheme } from "../theme/ColorThemeProvider";
import { Outlet, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

import AppFooter from "../components/AppFooter";

const Home = () => {
  const { colorTheme } = useColorTheme();
  const [isOpen, { close: closeNavbar, toggle: toggleNavbar }] =
    useDisclosure(false);

  const { pathname } = useLocation();

  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      header={<AppHeader isOpen={isOpen} toggleNavbar={toggleNavbar} />}
      navbar={
        pathname.startsWith("/games") ? undefined : (
          <AppNavbar closeNavbar={closeNavbar} isOpen={isOpen} />
        )
      }
      footer={<AppFooter />}
      bg={colorTheme === "dark" ? "dark.6" : "gray.1"}
    >
      <Container>
        <Outlet />
      </Container>
    </AppShell>
  );
};

export default Home;
