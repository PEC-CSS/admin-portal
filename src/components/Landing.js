import React from "react";
import HeroBox from "./Landing/HeroBox";
import Link from "next/link";

function Landing() {
    const heroTitle = "ACM Admin Portal"
    const heroSubtitle = "Unleash efficiency, foster excellence, and streamline administrative tasks effortlessly";

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 h-[100vh]">
            <div className="bg-[#d9d9d9] h-[100vh] justify-center items-center hidden lg:grid">
                <img src="/assets/acm.png" height={500} width={500} />
            </div>

            <div className="lg:h-[100vh]">
                <div className="p-2 lg:hidden">
                    <img src="/assets/acm.png" height={80} width={80} />
                </div>

                <div className="justify-center items-center flex flex-col mt-10 lg:mt-0 lg:min-h-[100vh]">
                    <p className="text-5xl md:text-8xl font-bold text-[#1d4ed8]">Welcome</p>
                    <HeroBox title={heroTitle} subtitle={heroSubtitle} />
                    <Link href={"/login"} aria-label="Login">
                        <button className="acm-button px-[40px]">Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
