import React, { Fragment } from "react";
import Hero from "../Components/Hero/Hero";
import useScrollToTop from "../Hooks/useScrollToTop";

const LearnMore = () => {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynmic>Learn More!</Hero>
    </Fragment>
  );
};

export default LearnMore;
