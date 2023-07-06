import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "./nav-bar";
import Footer from "./footer";

interface ILayout {
  children: React.ReactNode;
}

const appTheme = createTheme({
  typography: {
    fontFamily: [
      "montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontWeightBold: 800,
    fontWeightLight: 800,
    fontWeightRegular: 800,
    fontWeightMedium: 800,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1f265d",
    },
    secondary: {
      main: "#fddf03",
    },
  },
});

function Layout(props: ILayout) {
  const { children } = props;

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <NavBar />

      <Box component="main" sx={{ pt: { xs: 7, sm: 8 } }}>
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
