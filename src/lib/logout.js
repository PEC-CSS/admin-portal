import Cookies from "universal-cookie";
import { signOut } from "next-auth/react";

const logout = async (router, session) => {
    try {
        const cookies = new Cookies();

        let data;
        if (session) {
            data = session;
            signOut();
        } else {
            data = cookies.get("session-token");
        }
        cookies.remove("redirectPath");
        cookies.remove("session-token");

        router.push("/");
        return {
            success: true,
        };
    } catch (ex) {
        return {
            success: false,
        };
    }
};

export default logout;
