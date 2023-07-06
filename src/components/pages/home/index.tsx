import React from "react";
// import { ElfsightWidget } from "react-elfsight-widget";

/* MATERIAL UI | COMPONENTS */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Hero from "@/components/ui/home/hero";

function Home() {
  return (
    <React.Fragment>
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
