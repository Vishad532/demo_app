const baseUrl = process.env.REACT_APP_BASE_URL;
export const userEndPoints = {
    getUserInfo: `${baseUrl}user_info`,
    getFollowers: `${baseUrl}followers`,
    getFollowing: `${baseUrl}following`
}