import Head from "next/head";

const SEO = ({ data }) => {
  const { title, description, keywords } = data;
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
      {keywords && <meta name="keywords" content={keywords.join(',')} />}
    </Head>
  );
};

export default SEO;
