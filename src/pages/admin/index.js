import getServerCookieData from "@/lib/getServerCookieData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBarWithDialog from "@/components/SearchBar/SearchBarWithDialog";
import Head from "next/head";
import { Typography } from "@mui/material";

function AdminDashboard() {
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const router = useRouter();
    const [isUserSearch, setIsUserSearch] = useState(true);

    const { data: session } = useSession();

    return (
        <div>
            <Head>
                <title>Admin Portal | PECACM</title>
            </Head>

            <Navbar MiddleComponent={<SearchBarWithDialog />} />

            <Typography fontFamily={"monospace"} sx={{
                margin: "10px"
            }}>
                Welcome to ACM Admin Portal. This is a site under construction.
            </Typography>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/underwork.jpeg" alt="" />
        </div>
    );
}

export default AdminDashboard;

export async function getServerSideProps(context) {
    const { data } = getServerCookieData(context);

    const token = data?.token;

    if (!token) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
}
