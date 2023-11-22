import Link from "next/link";
import React from "react";

function Landing() {
    return (
        <div>
            Landing
            <Link href={"/login"} aria-label="Login">
                <button className="acm-button">Login</button>
            </Link>
        </div>
    );
}

export default Landing;
