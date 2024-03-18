import getServerCookieData from "@/lib/getServerCookieData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBarWithDialog from "@/components/SearchBar/SearchBarWithDialog";
import Head from "next/head";
import EventDataTable from "@/components/common/EventDataTable";

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
            <EventDataTable />
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
