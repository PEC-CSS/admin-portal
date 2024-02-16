export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete,
};

async function get({ url, token = "" }) {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    return fetch(fetchUrl(url), requestOptions).then(handleResponse);
}

async function post({ url, body, token = "" }) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    };
    return fetch(fetchUrl(url), requestOptions).then(handleResponse);
}

async function put({ url, body, token }) {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    };
    return fetch(fetchUrl(url), requestOptions).then(handleResponse);
}

async function _delete({ url, token }) {
    const requestOptions = {
        method: "DELETE",
        Authorization: `Bearer ${token}`,
    };
    return fetch(fetchUrl(url), requestOptions).then(handleResponse);
}

async function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export function fetchUrl(url) {
    const backendUrl = process.env.BACKEND;
    const root =
        process.env.NODE_ENV === "development" && false
            ? "http://localhost:8080"
            : backendUrl;
    return `${root}/${url}`;
}

export function fetchFrontendUrl() {
    return process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://admin.pecacm.com";
}
