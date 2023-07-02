import React from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import useCheckMobileScreen from "@/hooks/use-responsive";

import MenuIcon from "@mui/icons-material/Menu";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import RateReviewIcon from "@mui/icons-material/RateReview";

const NavMenu = () => {
  return [
    {
      title: "Hubungi Kami",
      link: "/contact",
      icon: <RateReviewIcon />,
    },
  ];
};

function NavBar() {
  const { isMobile } = useCheckMobileScreen();

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "tab" ||
          (event as React.KeyboardEvent).key === "shift")
      ) {
        return;
      }

      setOpenDrawer(isOpen);
    };

  React.useEffect(() => {
    if (!isMobile) setOpenDrawer(false);
  }, [isMobile]);

  const AppBarExtendProps = openDrawer && { elevation: 0 };
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        {...AppBarExtendProps}
      >
        <Box component="nav">
          <Container maxWidth="lg">
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Box
                  component="div"
                  sx={{
                    position: "relative",
                    width: 140,
                    height: 48,
                  }}
                >
                  <Image
                    style={{ objectFit: "contain" }}
                    src="/images/site/aif-logo-white.png"
                    alt="AIF Logo"
                    sizes="(max-width: 899px) 70px, 140px"
                    priority
                    fill
                  />
                </Box>
              </Box>

              <Box sx={{ display: { xs: "none", md: "initial" } }}>
                {NavMenu().map((el, i) => {
                  return (
                    <Button
                      key={i}
                      size="large"
                      sx={{ color: "rgb(255, 255, 255)" }}
                    >
                      {el.title}
                    </Button>
                  );
                })}
                <Button
                  size="large"
                  color="secondary"
                  variant="contained"
                  sx={{ ml: 1, color: "rgb(0, 0, 0)" }}
                >
                  TIKET
                </Button>
              </Box>
              <Box sx={{ display: { xs: "initial", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={toggleDrawer(!openDrawer)}
                  sx={{ color: "rgb(255, 255, 255)" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          width: "auto",
          [`& .MuiDrawer-paper`]: {
            width: "auto",
            boxSizing: "border-box",
            pt: 7,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "rgb(255, 255, 255)",
          }}
        >
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {NavMenu().map((el) => {
                return (
                  <ListItem key={el.title} sx={{ px: 0 }}>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: "rgb(255, 255, 255)" }}>
                        {el.icon}
                      </ListItemIcon>
                      <ListItemText primary={el.title} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
              <ListItem sx={{ px: 0 }}>
                <Button
                  size="large"
                  color="secondary"
                  variant="contained"
                  sx={{ ml: 1, color: "rgb(0, 0, 0)", width: "100%" }}
                >
                  TIKET
                </Button>
              </ListItem>
            </List>
          </Box>
        </Container>
      </Drawer>
    </Box>
  );
}

export default NavBar;
