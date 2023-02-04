import Head from "next/head";
import React from "react";

// Handles meta info for the site
function HtmlHead() {
  return (
    <Head>
      <title>Harley Welsby | Full-Stack Dev</title>
      <meta
        name="description"
        content="Full-Stack Web Developer in New Zealand"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}

export default HtmlHead;
