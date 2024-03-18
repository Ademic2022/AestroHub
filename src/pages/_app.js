import React from "react";

const MyApp = () => {
  return (
    <React.Fragment>
      <GalaxyBackground />
      <ResponsiveNavBar />
      <ScrollToTop />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default MyApp;
