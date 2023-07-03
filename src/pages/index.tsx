import React from "react";
import Head from "next/head";

import HomePage from "@/components/pages/home";

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

      <HomePage />
    </React.Fragment>
  );
}

export default Home;
