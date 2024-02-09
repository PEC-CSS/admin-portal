import {fetchWrapper} from '@/util/fetchWrapper'

export async function getMatchingUsersApi(pattern, token) {
    pattern = pattern.replace(/\s/g, '')
    // remove all empty spaces in the pattern since the api compares the pattern with user email id
    return await fetchWrapper.get(
        {
            url: `v1/user/search?query=${pattern}`,
            token: token
        }
    );
}