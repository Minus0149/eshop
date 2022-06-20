import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link rel="icon" href="/assets/scart.svg" />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Ecommerce Shop designed by minus "
          />
          <meta name="keywords" content="HTML, CSS, JavaScript, Shp[], Minus" />
          <meta name="author" content="Minus" />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
