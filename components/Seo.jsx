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
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="favicon.ico" />
    </Head>
  </>
);

export default Seo;
