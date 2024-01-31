import React from "react";
import styles from "../style";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
const Footer = () => {
  return (
    // Footer
    <div
      className={`bg-smoke pt-[1rem] sm:pt-[5rem] relative bottom-[39rem] ss:bottom-[34rem] px-25 w-[90%] m-auto`}
    >
      <div
        className={`flex flex-1 flex-wrap sm:flex-nowrap gap-10 sm:gap-[3rem] sm:justify-between `}
      >
        {/* container of Lankit part */}
        <div className="flex-col flex ">
          <h1 className="text-primary text-2xl font-semibold mb-1">Landkit.</h1>
          <p className="text-lightdark font-normal mb-1">
            A better way to build
          </p>
          <div className="flex gap-2 text-[rgb(134,154,184)] mt-2  ">
            <FaInstagram className="text-[25px]" />
            <IoLogoFacebook className="text-[25px]" />
            <FaTwitter className="text-[25px]" />
            <FaPinterest className="text-[25px]" />
          </div>
        </div>
        {/* container of 4 part */}
        <div className="flex gap-12 flex-wrap sm:w-[400px] lg:w-[800px] lg:gap-[4rem]">
          <div className="flex gap-[5rem] ss:gap-[200px] sm:gap-[8.25rem] lg:gap-[4rem]">
            <div className="flex flex-col">
              <h1 className={`${styles.FooterH1}`}>PRODUCTS</h1>
              <a href="#" className={`${styles.FooterA}`}>
                Page Builder
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                UI Kit
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Styleguide
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Documentation
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Changelog
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className={`${styles.FooterH1}`}>SERVICES</h1>
              <a href="#" className={`${styles.FooterA}`}>
                Documentation
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Chagelog
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Pagebuilder
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                DI Kit
              </a>
            </div>
          </div>
          <div className="flex gap-[5rem] ss:gap-[200px] sm:gap-[8.25rem] lg:gap-[4rem]">
            <div className="flex flex-col">
              <h1 className={`${styles.FooterH1}`}>CONNECT</h1>
              <a href="#" className={`${styles.FooterA}`}>
                Page Builder
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                UI Kit
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Styleguide
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Documentation
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Changelog
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Documentation
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Changelog
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className={`${styles.FooterH1}`}>LEGAL</h1>
              <a href="#" className={`${styles.FooterA}`}>
                Documentation
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Changelog
              </a>
              <a href="#" className={`${styles.FooterA}`}>
                Pagebuilder
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
