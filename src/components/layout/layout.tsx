import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "./nav-bar";
import Footer from "./footer";

interface ILayout {
  children: React.ReactNode;
}

const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1f265d",
    },
    secondary: {
      main: "#561f5d",
    },
  },
});

function Layout(props: ILayout) {
  const { children } = props;

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <NavBar />

      <Box component="main" sx={{ pt: 7 }}>
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
