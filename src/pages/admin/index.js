import DialogPopup from "@/components/common/DialogPopup";
import getServerCookieData from "@/lib/getServerCookieData";
import logout from "@/lib/logout";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useState} from "react";
import SearchBarWithDropdown from "@/components/SearchBarWithDropdown";

function AdminDashboard() {
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const router = useRouter();
    const [isUserSearch, setIsUserSearch] = useState(true)

    const {data: session} = useSession();

    return (
        <div>
            <div class='flex items-center justify-between p-2'>
                AdminDashboard{" "}
                {showLogoutDialog && <DialogPopup
                    errorDescription="Are you sure you want to logout?"
                    errorTitle="Logout"
                    handleAction={() => {
                        logout(router, session);
                    }}
                    handleClose={() => setShowLogoutDialog(false)}
                />}

                <button
                    className="acm-button"
                    aria-label="Logout"
                    onClick={() => setShowLogoutDialog(true)}
                >
                    Logout
                </button>
            </div>


            <div class='h-screen bg-blue-300'>
                <div class='flex justify-center bg-amber-200'>
                    <SearchBarWithDropdown isUserSearch={isUserSearch}/>
                    <button onClick={() => setIsUserSearch((prevState) => !prevState)}
                            className='mb-auto p-2 bg-blue-900 border-2 border-blue-900 ml-2 rounded-md text-white min-w-[10vw]'>
                        {
                            `Toggle ${isUserSearch ? 'Events' : 'Users'}`
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

export async function getServerSideProps(context) {
    const {data} = getServerCookieData(context);

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
