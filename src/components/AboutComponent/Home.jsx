import React from "react";
import PageSection from "../common/PageSection";

const Section1 = () => {
  const sectionDetails = {
    title: "About Us",
    subtitle:
      "Learn about AestroHub mission and vision. How our services are tailored to align Web3 founders, service providers, investors, and communities together.",
    btnText: "Make a Proposal",
    destination: "/contact-us",
    img: "images/g10.webp",
    config: {
      img: {
        my: 3,
        height: "400px",
        objectFit: "contain",
      },
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

export default Section1;
