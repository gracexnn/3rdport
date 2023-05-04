// pages/_document.js

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}
 <title>gracexnn portfolio</title>
 <meta name="description" content="Jr FE dev." />
    <meta name="og:title" content="Gracexnn Portfolio" />
    <meta name="og:description" content="Jr FE dev." />
    <meta name="og:image" content="https://res.cloudinary.com/dp7ejpuvw/image/upload/v1683203871/294436560_3286790511641926_7377637893311893845_n_cjdl3n.jpg" />
    <meta name="og:url" content="https://gracexnn.space" />
    <meta name="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
