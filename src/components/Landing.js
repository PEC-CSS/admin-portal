import React from "react";
import HeroBox from "./Landing/HeroBox";
import Link from "next/link";
import Head from "next/head";
import LandingCard from "./Landing/LandingCard";
import { Snowfall } from "react-snowfall";

function Landing() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-[100vh] bg-[#edf3ff]">
      <Snowfall
        color="#9ab4d1"
        wind={[0, 0]}
        snowflakeCount={20}
        speed={[0.1, 2.5]}
        radius={[1, 5]}
      />
      <Head>
        <title>Admin Portal | PECACM</title>
      </Head>
      <div className="min-w-[100vw] flex flex-col justify-center items-center">
        <img
          src="/assets/acm.png"
          height={200}
          width={200}
          className="mr-[10px]"
        />
        <p className="flex justify-center items-center text-[70px] text-[#3d6ca3] font-[700]">
          PEC ACM Admin Portal
        </p>

        <p className="text-[#3d6ca3] text-[26px] font-normal opacity-60 mt-5">
          Powering Student Excellence and Efficiency
        </p>

        <div className="flex my-10">
          {LANDINGCARDS_DATA.map(({ imgPath, title, link }, id) => (
            <LandingCard imgPath={imgPath} title={title} link={link} key={id} />
          ))}
        </div>

        <Link href={"/login"} aria-label="Login">
          <button className="acm-button px-[40px]">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;

const LANDINGCARDS_DATA = [
  {
    imgPath: "/assets/acm.png",
    title: "Meet our team",
    link: "https://www.pecacm.com/team",
  },
  {
    imgPath: "/assets/acm.png",
    title: "Meet our team",
    link: "https://www.pecacm.com/team",
  },
  {
    imgPath: "/assets/acm.png",
    title: "Meet our team",
    link: "https://www.pecacm.com/team",
  },
];
