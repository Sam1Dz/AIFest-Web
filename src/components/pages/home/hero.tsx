import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";

import useResponsive from "@/hooks/use-responsive";

import LocalActivityIcon from "@mui/icons-material/LocalActivity";

function Hero() {
  const {
    isScreenWidthHeightUnder600,
    isScreenWidthHeightUnder375,
    isScreenHeightUnder375,
  } = useResponsive();

  return (
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
        />
      </Box>
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
            position: "relative",
            width: isScreenWidthHeightUnder375 ? 246 : { xs: 368.5, md: 491 },
            height: isScreenWidthHeightUnder375 ? 84 : { xs: 126, md: 167 },
            m: "auto",
            mb: 4,
          }}
        >
          <Image
            style={{ objectFit: "contain" }}
            src="/images/site/aif-logo-2023-navy.png"
            alt="AIF Logo"
            priority
            fill
          />
        </Box>
        <Typography
          variant={
            isScreenWidthHeightUnder375
              ? "body1"
              : isScreenWidthHeightUnder600
              ? "h6"
              : "h5"
          }
          component="p"
          sx={{ mb: 4 }}
        >
          BANDUNG, 20 AGUSTUS 2023
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<LocalActivityIcon />}
        >
          Tiket Presale
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
