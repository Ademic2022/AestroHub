import React from "react";
import PageSection from "../common/PageSection";

const Section1 = () => {
  const sectionDetails = {
    title: "AestroBlog",
    subtitle:
      "Web3 demystified. Read about the latest articles, product review and updates around web3 ecosystem.",
    btnText: "Make a Proposal",
    img: "images/g10.png",
    config: {
      img: {
        height: "400px",
        my: 3,
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
      <PageSection sectionDetails={sectionDetails} />
    </React.Fragment>
  );
};

export default Section1;
