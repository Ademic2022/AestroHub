import Head from "next/head";

const SEO = ({ data }) => {
  const { title, description, keywords, ogImage } = data;
  return (
    <Head>
      <title>{title ? title : "Aestrohub"}</title>
      <link rel="manifest" href="/manifest.json"/>
      <meta
        name="description"
        content={
          description
            ? description
            : "We're not just an agency, we're a launchpad. A cross-functional, all-in-one service provider for everything you need to propel your Web3 project to the stars."
        }
      />
      {/* Twitter Card metadata */}
      <meta name="google-site-verification" content="SbVMh0psBIXLjlZu3PF6c9xNQtj1uw993CesXz-sPxE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage ? ogImage : "https://aestrohub.vercel.app/images/logoDark.png"} />
      {/* Open Graph metadata */}
      <meta property="og:image" content={ogImage ? ogImage : "https://aestrohub.vercel.app/images/logoDark.png"} />
      {keywords && <meta name="keywords" content={keywords.join(",")} />}
    </Head>
  );
};

export default SEO;
