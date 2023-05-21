import React from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";

import Hero from "@/components/pages/home/hero";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Anime Indonesia Festival - Official Website</title>
        <meta
          name="description"
          content="Selamat datang di Website Resmi AIF - Anime Indonesia Festival. Anime Indonesia Festival adalah Event Anime yang diselenggarakan di Indonesia"
        />
      </Head>

      <Hero />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: 8,
        }}
      >
        <Typography component="h1" variant="h6">
          Web Created by AIF Web Development Team
        </Typography>
        <Typography component="h2" variant="body1">
          Work in progress, not indicative of final version
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Home;
