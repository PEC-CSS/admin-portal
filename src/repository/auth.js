import { fetchWrapper } from "@/util/fetchWrapper";

const login = async ({ email, password }) => {
    try {
        const response = await fetchWrapper.post({
            url: "v1/user/login",
            body: { email, password },
        });

        if (response.user.designation != "Admin") {
            return {
                error: {
                    message: "Only Admins are allowed to login",
                },
            };
        }
        
        return {
            ...response,
        };
    } catch (error) {
        return {
            error: {
                message: error,
            },
        };
    }
};

export { login };
