import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <title>Jason Lee - A Full-stack Developer</title>
        <meta
          name="description"
          content="Jason Lee is a full-stack developer with over 5 years of experience. He is passionate about writing codes and developing web applications to solve real-life challenges."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="my-portfolio-o8a3.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://my-portfolio-o8a3.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Jason Lee - A Full-stack Developer"
        />
        <meta
          name="twitter:description"
          content="Jason Lee is a full-stack developer with 5 years of experience. He is passionate about writing codes and developing web applications to solve real-life challenges."
        />
        <meta
          name="twitter:image"
          content="/f1b5a05f-18ce-48c6-9cae-6c92d04e7845.png"
        ></meta>

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#5bbad5" />
        <meta name="theme-color" content="#1d2a35" />

        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-bglight dark:bg-bgdark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
