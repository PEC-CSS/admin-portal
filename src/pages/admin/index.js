import DialogPopup from "@/components/common/DialogPopup";
import getServerCookieData from "@/lib/getServerCookieData";
import logout from "@/lib/logout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

function AdminDashboard() {
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const router = useRouter();

    const { data: session } = useSession();

    return (
        <div>
            AdminDashboard{" "}
            {showLogoutDialog ? (
                <DialogPopup
                    errorDescription="Are you sure you want to logout?"
                    errorTitle="Logout"
                    handleAction={() => {
                        logout(router, session);
                    }}
                    handleClose={() => setShowLogoutDialog(false)}
                />
            ) : (
                <button
                    className="acm-button"
                    aria-label="Logout"
                    onClick={() => setShowLogoutDialog(true)}
                >
                    Logout
                </button>
            )}
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
