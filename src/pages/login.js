import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useSession } from "next-auth/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

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
        if (session) router.push("/dashboard");
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
        const redirectPath = cookies.get("redirectPath") || "/dashboard";
        cookies.remove("redirectPath");
        router.push(redirectPath);
    };

    if (session) return <div></div>;

    return (
        <div>
            <Head>
                <title>Login | ACM at PEC</title>
            </Head>
            <div className="flex flex-col">
                <Navbar />
            </div>

            <div className="mt-10 flex flex-col items-center mb-10">
                <h1 className="text-4xl  font-bold text-center">Login</h1>
                <div className="w-1/4 max-sm:w-3/4 max-md:w-1/2">
                    <div className="flex flex-col mt-10">
                        <label className="mb-5 text-lg font-bold">
                            Username:
                        </label>
                        <input
                            type="text"
                            onChange={handleChange}
                            placeholder="Enter Username"
                            className="rounded pl-1 pr-10 py-2 outline outline-black focus:outline focus:outline-blue-600 outline-2"
                        />
                    </div>
                    <div className="flex flex-col mt-5 mb-5">
                        <label className="mb-5 font-bold text-lg">
                            Password:
                        </label>
                        <div className="relative flex flex-row items-center justify-end">
                            <input
                                type={isVisible ? "text" : "password"}
                                onChange={handleChange}
                                placeholder="Enter Password"
                                className="w-full rounded pr-10 pl-1 py-2 outline outline-black focus:outline focus:outline-blue-600 outline-2"
                            />

                            <span
                                className="absolute px-2 bg-white"
                                onClick={() => {
                                    setIsVisible(!isVisible);
                                }}
                            >
                                {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-blue-600 hover:bg-white hover:text-black hover:outline-2 hover:outline hover:outline-black text-white font-bold py-2 px-4 rounded"
                    >
                        {!loading ? "Login" : "Loading..."}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
