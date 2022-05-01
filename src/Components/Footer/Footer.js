import React from "react";
import Button from "../../UI/Button/Button";
import Logo from "../../UI/Logo/Logo";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
  FaFacebook,
} from "react-icons/fa";

import classes from "../Footer/Footer.module.scss";

const footerColumns = [
  {
    id: 1,
    headline: "About us",
    links: [
      "Pricing",
      "Our Story",
      " Testimonials",
      "Investors",
      "Terms of Service",
    ],
  },
  {
    id: 2,
    headline: "Contact us",
    links: ["Contact", "Support", "Destinations", "Careers", "Refund Policy"],
  },
  {
    id: 3,
    headline: "Content",
    links: [
      "Submit Video",
      "Submit Photo",
      " Influencer",
      "Marketing",
      "Privacy Policys",
    ],
  },
  {
    id: 4,
    headline: "Socials",
    links: ["Youtube", "Facebook", "Snapcaht", "Twitter", "Instagram"],
  },
];

const socials = [
  <FaYoutube />,
  <FaInstagram />,
  <FaTwitter />,
  <FaSnapchatGhost />,
  <FaFacebook />,
];

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footer__newsletter}>
          <h4 className={classes.footer__newsletter__headline}>
            Join the Tropic newsletter to receive groundbreaking travel rewards
          </h4>
          <span>Unscribe at anytime.</span>
          <div className={classes.footer__newsletter__form}>
            <input
              className={classes.input}
              type="email"
              placeholder="Your Email!"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div className={classes.footer__content}>
          {footerColumns.map(({ id, headline, links }) => (
            <div className={classes.footer__content__col} key={id}>
              <div className={classes.footer__content__col__headline}>
                {headline}
              </div>
              <ul className={classes.footer__content__col__links}>
                {links.map((link, index) => {
                  // console.log(link)
                  return (
                    <li key={index + 1}>
                      <a href="/">{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className={classes.footer__base}>
          <Logo />
          <span className={classes.footer__base__year}>
            Tropic &nbsp;&copy;&nbsp; {new Date().getFullYear()}
          </span>
          <ul className={classes.footer__base__socials}>
            {socials.map((icon, index) => {
              // console.log(icon.type.name);
              // console.log(icon.type.prototype.constructor.name);
              return (
                <li key={index + 1}>
                  <a href="/">{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
