import React, { Fragment } from "react";
import Hero from "../Components/Hero/Hero";
import useScrollToTop from "../Hooks/useScrollToTop";

const BookNow = () => {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynmic>Book Now</Hero>
    </Fragment>
  );
};

export default BookNow;
