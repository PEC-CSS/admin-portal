import NextAuth from "next-auth";
import Cookies from "universal-cookie";
import GoogleProvider from "next-auth/providers/google";
import { fetchWrapper } from "@/util/fetchWrapper";

const authOptions = (req, res) => {
    const cookies = new Cookies(req.headers.cookie);

    return {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID || "",
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            }),
        ],
        callbacks: {
            async session({ session }) {
                const backendRes = await fetchWrapper.get({
                    url: "/v1/users",
                    token: cookies.get("session-token").token,
                });
                console.log(backendRes);
                return session;
            },

            async redirect({ baseUrl }) {
                const redirectPath = cookies.get("redirectPath") || "/";
                return baseUrl + redirectPath;
            },
        },
        secret: process.env.NEXTAUTH_SECRET,
    };
};

const nextAuth = (req, res) =>
    NextAuth(req, res, authOptions(req, res));

export default nextAuth;