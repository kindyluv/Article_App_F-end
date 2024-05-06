import axios from "axios";
import { articleAPIService } from ".";

export const getArticles = async () => {
    const { data } = await axios.get(articleAPIService);
    return data;
}

export const getArticlesByTitle = async (title) => {
    const url = `${articleAPIService}?title=${title}`;
    const { data } = await axios.get(url);
    return data;
}

export const getArticlesByUserId = async (userId) => {
    const url = `${articleAPIService}?userId=${userId}`;
    const { data } = await axios.get(url);
    return data;
}

export const getArticlesByArticleId = async (articleId) => {
    const url = `${articleAPIService}/${articleId}`;
    const { data } = await axios.get(url);
    return data;
}


export const postArticle = async (param) => {
    const { data } = await axios.post(articleAPIService, param);
    return data;
}