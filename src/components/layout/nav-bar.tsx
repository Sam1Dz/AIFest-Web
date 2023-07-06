import React from "react";
import Image from "next/image";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/* MATERIAL UI : COMPONENTS */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";

/* MATERIAL UI : ICONS */
import MenuIcon from "@mui/icons-material/Menu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import useCheckMobileScreen from "@/hooks/use-responsive";

const NavMenu = () => {
  return [
    {
      title: "Lokasi",
      link: "/location",
      icon: <LocationOnIcon />,
      child: [
        {
          title: "Bandung",
          link: "/location/bandung",
          icon: null,
          child: null,
        },
        {
          title: "Tasikmalaya",
          link: null,
          icon: null,
          child: null,
        },
      ],
    },
    {
      title: "Hubungi Kami",
      link: "/contact",
      icon: <RateReviewIcon />,
      child: null,
    },
  ];
};

const themeMenu = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        root: {
          pointerEvents: "none",
        },
      },
    },
  },
});

function NavBar() {
  let currentlyHoveringMenu = false;
  const { isMobile } = useCheckMobileScreen();

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(
    null
  );
  const [openMenuMobile, setOpenMenuMobile] = React.useState(true);

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

  const handleOpenChildMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorElMenu !== event.currentTarget) {
      setAnchorElMenu(event.currentTarget);
    }
  };
  const handleCloseChildMenu = () => {
    setAnchorElMenu(null);
  };
  const handleHoverMenu = () => {
    currentlyHoveringMenu = true;
  };
  const handleCloseHoverMenu = () => {
    currentlyHoveringMenu = false;
    setTimeout(() => {
      if (!currentlyHoveringMenu) {
        handleCloseChildMenu();
      }
    }, 50);
  };

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
                  const renderChild = el.child && {
                    "aria-owns": `menu-${el.title}`,
                    "aria-haspopup": true,
                    onClick(
                      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) {
                      handleOpenChildMenu(event);
                    },
                    onMouseOver(
                      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) {
                      handleOpenChildMenu(event);
                    },
                    onMouseOut() {
                      handleCloseHoverMenu();
                    },
                  };

                  return (
                    <React.Fragment key={i}>
                      <Button
                        size="large"
                        sx={{ color: "rgb(255, 255, 255)", fontWeight: 500 }}
                        {...renderChild}
                      >
                        {el.title}
                      </Button>
                      {el.child && (
                        <ThemeProvider theme={themeMenu}>
                          <Menu
                            id={`menu-${el.title}`}
                            anchorEl={anchorElMenu}
                            open={Boolean(anchorElMenu)}
                            onClose={handleCloseChildMenu}
                            MenuListProps={{
                              onMouseEnter: handleHoverMenu,
                              onMouseLeave: handleCloseHoverMenu,
                              style: { pointerEvents: "auto" },
                            }}
                            anchorOrigin={{
                              horizontal: "left",
                              vertical: "bottom",
                            }}
                          >
                            {el.child?.map((el, i) => {
                              return (
                                <MenuItem
                                  key={i}
                                  onClick={handleCloseChildMenu}
                                  sx={{ fontWeight: 500 }}
                                >
                                  {el.title}
                                </MenuItem>
                              );
                            })}
                          </Menu>
                        </ThemeProvider>
                      )}
                    </React.Fragment>
                  );
                })}
                <Button
                  size="large"
                  color="secondary"
                  variant="contained"
                  sx={{ ml: 1, color: "rgb(0, 0, 0)", fontWeight: 500 }}
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
          <Box role="presentation" onKeyDown={toggleDrawer(false)}>
            <List>
              {NavMenu().map((el, i) => {
                return (
                  <React.Fragment key={i}>
                    <ListItem
                      sx={{ px: 0 }}
                      onClick={() => {
                        if (el.child) {
                          setOpenMenuMobile(!openMenuMobile);
                        } else {
                          setOpenDrawer(false);
                        }
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon sx={{ color: "rgb(255, 255, 255)" }}>
                          {el.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={el.title}
                          primaryTypographyProps={{ fontWeight: 500 }}
                        />
                        {el.child && (
                          <Box component="div" sx={{ mr: 1.5 }}>
                            {!openMenuMobile ? <ExpandMore /> : <ExpandLess />}
                          </Box>
                        )}
                      </ListItemButton>
                    </ListItem>
                    {el.child && (
                      <Collapse
                        in={openMenuMobile}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List disablePadding>
                          {el.child.map((el, i) => {
                            return (
                              <ListItem key={i} onClick={toggleDrawer(false)}>
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemText
                                    primary={el.title}
                                    primaryTypographyProps={{ fontWeight: 500 }}
                                  />
                                </ListItemButton>
                              </ListItem>
                            );
                          })}
                        </List>
                      </Collapse>
                    )}
                  </React.Fragment>
                );
              })}
              <ListItem sx={{ px: 0 }}>
                <Button
                  size="large"
                  color="secondary"
                  variant="contained"
                  sx={{
                    color: "rgb(0, 0, 0)",
                    width: "100%",
                    fontWeight: 500,
                  }}
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
