import React from "react";
import PageSection from "../common/PageSection";

const Home = () => {
  const sectionDetails = {
    title: "AestroPad",
    subtitle:
      " Making liquidity and funding accessible to founders and project owners. Embrace a dynamic system of funding across different channels.  ",
    btnText: "Coming Soon",
    img: "images/launch.webp",
    destination:"#",
    config: {
      img: {
        height: "400px",
        my: 3,
        objectFit: "cover",
      },
      imgwidth:"100%",
      btn: {
        width: "200px",
        height: "50px",
      },
    },
  };
  return (
    <React.Fragment>
      <PageSection button sectionDetails={sectionDetails} />
    </React.Fragment>
  );
};

export default Home;
