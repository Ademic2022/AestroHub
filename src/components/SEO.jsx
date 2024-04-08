import Head from "next/head";

const SEO = ({ data }) => {
  const { title, description, keywords, ogImage } = data;
  return (
    <Head>
      <title>{title ? title : "Aestrohub"}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : "Navigating the uncharted waters of Web3 can be daunting. You need a clear roadmap to guide them through complex challenges, capitalize on emerging opportunities, and build sustainable success."
        }
      />
      <meta name="twitter:image" content="/images/logo.png" />
      <meta name="twitter:image:type" content="/images/logo.png" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta
        property="og:image"
        content={ogImage ? ogImage : "/images/logo.png"}
      />
      {keywords && <meta name="keywords" content={keywords.join(",")} />}
    </Head>
  );
};

export default SEO;
