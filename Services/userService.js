import { userEndPoints } from "./config";
import httpService from "./httpService"

export const getUserInfo = async (params) => {
    try {
        return await httpService.get(userEndPoints.getUserInfo, { params: params });
    }
    catch (error) {
        console.log("Error", error)
    }
}
export const getFollowers = async (params) => {
    return await httpService.get(userEndPoints.getFollowers, { params: params })
}
export const getFollowing = async (params) => {
    return await httpService.get(userEndPoints.getFollowing, { params: params })
}