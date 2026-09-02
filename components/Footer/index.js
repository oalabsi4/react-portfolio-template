import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Footer = ({}) => {
  const emailLink =
    data.socials.find((s) => s.link.includes("mailto:"))?.link ||
    "mailto:info@omar-alabsi.com";
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary" onClick={() => window.open(emailLink)}>
              Schedule a call
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
