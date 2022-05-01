import React, { Fragment } from "react";
import classes from "../Hero/Hero.module.scss";
import coverVID from "./../../assets/cover.mp4";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const HomePageContent = () => {
  const navigation = useNavigate();

  return (
    <Fragment>
      <h1 className={classes.hero__content__title}>The tropics are waiting</h1>
      <span className={classes.hero__content__tagline}>
        Let us know when you are finished packing
      </span>
      <p className={classes.hero__content__description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        quis orci elementum, consequat lacus in, ultricies lorem.
      </p>
      <div className={classes.hero__content__cta}>
        <Button onClick={() => navigation("/booknow")}>Book Now</Button>
        <Button onClick={() => navigation("/learnmore")} outline>
          Learn More
        </Button>
      </div>
    </Fragment>
  );
};
const Hero = ({ isDynmic, children }) => {
  return (
    <div className={classes.container}>
      <video
        autoPlay={true}
        muted
        loop
        className={classes.video}
        id={"video"}
        src={coverVID}
      ></video>
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          {!isDynmic && <HomePageContent />}
          {isDynmic && (
            <h1 className={classes.hero__content__title}>{children}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
