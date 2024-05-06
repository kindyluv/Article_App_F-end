import axios from "axios";
import { userApiService } from ".";

export const getUserByAuthorName = async (authorName) => {
    const url = `${userApiService}?name=${authorName}`;
    const { data } = await axios.get(url);
    return data;
}

export const getUserByUserName = async (userName) => {
    const url = `${userApiService}?username=${userName}`;
    const { data } = await axios.get(url);
    return data;
}

export const getUserByUserId = async (userId) => {
    const url = `${userApiService}/${userId}`;
    const { data } = await axios.get(url);
    return data;
}

export const createUser = async (param) => {
    const { data } = await axios.post(userApiService, param);
    return data;
}

export const getUsers = async () => {
    const { data } = await axios.get(userApiService);
    return data;
}