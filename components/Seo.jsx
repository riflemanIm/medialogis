import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || Système d'information médical}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="	MEDIALOGIS Système d'information médicals"
      />
      <meta
        name="description"
        content="MEDIALOGIS S.A - Système d'information médical"
      />

      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title></title>
      <meta name="description" content="The portal for you and your family" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <link rel="manifest" href="site.webmanifest" />

      {font && <link href={font} rel="stylesheet" />}
    </Head>
  </>
);

export default Seo;
