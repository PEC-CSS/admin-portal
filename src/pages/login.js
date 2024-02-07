import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useSession } from "next-auth/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import CustomTextField from "@/components/common/CustomTextField";
import { IconButton, InputAdornment } from "@mui/material";
import { login } from "@/repository/auth";
import getServerCookieData from "@/lib/getServerCookieData";
import Navbar from "@/components/Navbar";
import SearchBarWithDropdown from "@/components/SearchBarWithDropdown";

function Login() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState({
        error: false,
        title: "",
        description: "",
    });

    const router = useRouter();
    const { data: session } = useSession();
    const cookies = new Cookies();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (session) router.push("/admin");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!formValues.email.endsWith("@pec.edu.in")) {
            setError({
                title: "Ckeck email id",
                description: "Use registered pec id",
                error: true,
            });
        } else {
            const response = await login({ ...formValues });
            if (response.error || !response.jwtToken) {
                setError({
                    title: "Error while signing in",
                    description: response.error?.message || "",
                    error: true,
                });
                setLoading(false);
                return;
            }
            const jwtToken = response.jwtToken;
            const user = response.user;
            cookies.set(
                "session-token",
                JSON.stringify({ token: jwtToken, user })
            );
        }
        setLoading(false);
        const redirectPath = cookies.get("redirectPath") || "/admin";
        cookies.remove("redirectPath");
        router.push(redirectPath);
    };

    if (session) return <div></div>;

    return (
        <div>
            <Head>
                <title>Login | ACM at PEC</title>
            </Head>

            <Navbar MiddleComponent={<SearchBarWithDropdown />} />

            <div className="mt-10 flex flex-col items-center mb-10">
                <h1 className="text-4xl  font-bold text-center">Login</h1>
                <form className="w-1/4 max-sm:w-3/4 max-md:w-1/2" onSubmit={handleSubmit}>
                    <div className="flex flex-col mt-10">
                        <CustomTextField
                            name="email"
                            type="email"
                            label="email@name.com"
                            variant="filled"
                            onChange={handleChange}
                            value={formValues.email}
                            fullWidth={true}
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col mt-5 mb-5">
                        <CustomTextField
                            name="password"
                            label="Password"
                            variant="filled"
                            type={isVisible ? "text" : "password"}
                            onChange={handleChange}
                            value={formValues.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setIsVisible(!isVisible)
                                            }
                                        >
                                            {isVisible ? (
                                                <AiFillEye />
                                            ) : (
                                                <AiFillEyeInvisible />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth={true}
                            required={true}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="acm-button"
                    >
                        {!loading ? "Login" : "Loading..."}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;


export async function getServerSideProps(context) {
    const { data } = getServerCookieData(context);
    if (data != null) {
        return {
            redirect: {
                permanent: false,
                destination: "/admin",
            },
        };
    }
    return {
        props: {},
    };
}
