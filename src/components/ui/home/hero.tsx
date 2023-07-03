import React from "react";
import Image from "next/image";

/* MATERIAL UI : COMPONENTS */
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

/* MATERIAL UI : ICONS */
import LocationOnIcon from "@mui/icons-material/LocationOn";

import useResponsive from "@/hooks/use-responsive";

function Hero() {
  const { width, height, isScreenHeightUnder375 } = useResponsive();

  return (
    <React.Fragment>
      <Box
        component="section"
        sx={{
          position: "relative",
          width: "100%",
          height: isScreenHeightUnder375
            ? "calc(100vh + 56px)"
            : "calc(100vh - 56px)",
          overflow: "hidden",
        }}
      >
        <Box
          component="div"
          sx={{
            position: "inherit",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          }}
        >
          <Image
            fill
            src="/images/site/hero-background.jpg"
            alt="Hero Background"
            priority
            style={{ objectFit: "cover", zIndex: -1 }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>

        {/* HERO CONTENT */}
        {/* MASCOT + INFO | Width Screen > 1000px */}
        <Box
          component="div"
          sx={{ display: width < 1000 ? "none" : "inherit" }}
        >
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: "-25%",
              zIndex: 2,
            }}
          >
            <Box
              component="div"
              sx={{
                position: "relative",
                width: { md: 594, lg: 656, xl: 717 },
                height: { md: 1119, lg: 1253, xl: 1351 },
                m: "auto",
              }}
            >
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="/images/site/mascot.png"
                alt="Hero Background"
                style={{ transform: "scaleX(-1)" }}
                fill
                priority
              />
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: "0%",
              width: "100%",
              height: isScreenHeightUnder375
                ? "calc(100vh + 56px)"
                : "calc(100vh - 56px)",
            }}
          >
            {/* LOGO AIF */}
            <Box
              component="div"
              sx={{
                position: "absolute",
                top: "0%",
                width: "100%",
                height: { md: "calc(100vh - 50vh)", lg: "calc(100vh - 40vh)" },
              }}
            >
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "75%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    position: "relative",
                    // width: { md: 421, lg: 526 },
                    // height: { md: 130, lg: 162 },
                    width: { md: 421, lg: 526 },
                    height: { md: 130, lg: 162 },
                    m: "auto",
                  }}
                >
                  <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    src="/images/site/aif-logo-bandung-2023-navy.png"
                    alt="AIF Logo"
                    priority
                    fill
                  />
                </Box>
              </Box>
            </Box>

            {/* INFO EVENT */}
            <Box
              component="div"
              sx={{
                height: { md: "calc(100vh - 50vh)", lg: "calc(100vh - 40vh)" },
                zIndex: 1,
              }}
            />
            <Box
              component="div"
              sx={{
                p: 3,
                width: "100%",
                backgroundColor: (theme) => theme.palette.secondary.main,
              }}
            >
              <Grid container>
                <Grid item md={6} />
                <Grid item md={6}>
                  <Chip
                    icon={<LocationOnIcon />}
                    label="LOKASI"
                    color="primary"
                    sx={{ mb: 1 }}
                  />
                  <Typography
                    component="h1"
                    variant="h4"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  >
                    GRHA EMERAL - PADASUKA
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="primary"
                    sx={{ backgroundColor: "unset" }}
                  >
                    Jl. Cimuncang No.30/32, Padasuka, Kec. Cibeuying Kidul, Kota
                    Bandung
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        {/* INFO | Width Screen < 1000px */}
        <Box
          component="div"
          sx={{ display: width > 1000 ? "none" : "inherit" }}
        >
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
              p: 1,
            }}
          >
            <Box
              component="div"
              sx={{
                width:
                  width < 300 || height < 300
                    ? 246
                    : height > 999 || height > 999
                    ? 526
                    : { xs: 386, md: 421 },
                height:
                  width < 300 || height < 300
                    ? 74
                    : height > 999 || height > 999
                    ? 162
                    : { xs: 119, md: 130 },
                m: "auto",
              }}
            >
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                src="/images/site/aif-logo-bandung-2023-navy.png"
                alt="AIF Logo"
                priority
                fill
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          p: 3,
          width: "100%",
          backgroundColor: (theme) => theme.palette.secondary.main,
          display: width < 1000 ? "inherit" : { md: "none", xs: "inherit" },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Chip
            icon={<LocationOnIcon />}
            label="LOKASI"
            color="primary"
            sx={{ mb: 1 }}
          />
          <Typography
            component="h1"
            variant="h5"
            color="primary"
            sx={{ fontWeight: 700 }}
          >
            GRHA EMERAL - PADASUKA
          </Typography>
          <Typography
            component="p"
            variant="body2"
            color="primary"
            sx={{ backgroundColor: "unset" }}
          >
            Jl. Cimuncang No.30/32, Padasuka, Kec. Cibeuying Kidul, Kota Bandung
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Hero;
