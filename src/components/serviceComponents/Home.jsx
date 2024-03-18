import React from "react";
import PageSection from "../common/PageSection";

const Section1 = () => {
  const sectionDetails = {
    title: "AestroService",
    subtitle:
      "We offer individual services and cross-functional services. We help individual and businesses to remove the barrier of searching for a single service providers. Get all the services you need here to build your dream product.",
    btnText: "Make a Proposal",
    img: "images/Mars.png",
    config: {
      img: {
        height: "400px",
        my: 3,
        objectFit: "contain",
      },
      typography: {
        fontSize: { xs: "56px", md: "80px" },
      },
    },
  };
  return (
    <React.Fragment>
      <PageSection button sectionDetails={sectionDetails} />
    </React.Fragment>
  );
};

export default Section1;
