import React from "react";
import Head from "next/head";

/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// import { ElfsightWidget } from "react-elfsight-widget";

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

        <meta property="og:image" content="/images/site/aif-logo-round.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:src"
          content="/images/site/aif-logo-round.jpg"
        />
      </Head>

      <Hero />
      {/* <ElfsightWidget widgetId="dedc9d3a-44f9-4bc2-a1f0-4e9b621e0515" /> */}
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
