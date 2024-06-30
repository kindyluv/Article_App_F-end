import { getArticlesByArticleId, getArticlesByUserId, getArticlesByTitle } from "../api/ArticleApi";
import { getUserByAuthorName, getUserByUserId, getUserByUserName } from "../api/UserApi";

export const truncateWords = (text, limit) => {
    if (text.length <= limit) {
        return text;
    }
    return text.slice(0, limit) + '...';
};

export const handleSearch = async (searchQuery, originalArticles, setArticles) => {
    if (searchQuery.trim() === '') {
        setArticles(originalArticles);
        return;
    }

    const filteredArticles = originalArticles.filter(
        (article) =>
            article?.title.includes(searchQuery) ||
            article?.user?.name.includes(searchQuery) ||
            article?.id.toString().includes(searchQuery) ||
            article?.user?.id.toString().includes(searchQuery),
    );

    if (filteredArticles.length > 0) {
        setArticles(filteredArticles);
        return;
    }

    await handleArticlesByUserId(searchQuery, setArticles);
    await handleArticlesByPostId(searchQuery, setArticles);
    await handleArticlesByTitle(searchQuery, setArticles);
    await handleUserByUsername(searchQuery, setArticles);
    await handleUserByAuthorName(searchQuery, setArticles);
};

const handleArticlesByUserId = async (searchQuery, setArticles) => {
    if (!isNaN(searchQuery)) {
        const userId = parseInt(searchQuery);
        const articlesByUserId = await getArticlesByUserId(userId);

        if (articlesByUserId.length > 0) {
            const users = await getUserByUserId(articlesByUserId[0]?.userId);
            const processArticle = processArticles(articlesByUserId, users);
            setArticles(processArticle);
            throw new Error('Article found by user id');
        }
    }
};

const handleArticlesByPostId = async (searchQuery, setArticles) => {
    if (!isNaN(searchQuery)) {
        const postId = parseInt(searchQuery);
        const articlesByPostId = await getArticlesByArticleId(postId);

        if (articlesByPostId.length > 0) {
            const users = await getUserByUserId(articlesByPostId[0]?.userId);
            const processArticle = processArticles(articlesByPostId, users);
            setArticles(processArticle);
            throw new Error('Article found by post id');
        }
    }
};

const handleArticlesByTitle = async (searchQuery, setArticles) => {
    const articlesByTitle = await getArticlesByTitle(searchQuery);

    if (articlesByTitle.length > 0) {
        const users = await getUserByUserId(articlesByTitle[0]?.userId);
        const processArticle = processArticles(articlesByTitle, users);
        setArticles(processArticle);
        throw new Error('Article found by title');
    }
};

const handleUserByUsername = async (searchQuery, setArticles) => {
    const userByUsername = await getUserByUserName(searchQuery);

    if (userByUsername) {
        const article = await getArticlesByUserId(userByUsername[0]?.userId);
        const processArticle = processArticles(article, userByUsername);
        setArticles(processArticle);
        throw new Error('User found by username');
    }
};

const handleUserByAuthorName = async (searchQuery, setArticles) => {
    const userByAuthorName = await getUserByAuthorName(searchQuery);

    if (userByAuthorName) {
        const article = await getArticlesByUserId(userByAuthorName[0]?.userId);
        const processArticle = processArticles(article, userByAuthorName);
        setArticles(processArticle);
        throw new Error('User found by author name');
    } else {
        const errorMessage = `No article found with this name ${searchQuery}`;
        alert(errorMessage);
    }
};

export const validateForm = (articleData) => {
    const errors = {};
    let isValid = true;

    for (const key in articleData) {
        if (articleData[key].trim() === '' && key !== 'website') {
            errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
            isValid = false;
        }
    }

    if (articleData.name.trim().length < 3) {
        errors.name = 'Name must be at least 3 characters long.';
        isValid = false;
    }

    if (articleData.userName.trim().length < 3) {
        errors.userName = 'User Name must be at least 3 characters long.';
        isValid = false;
    }

    const phoneRegex = /^(\+\d{1,3})?[\s.-]?\d{3,}$/;
    if (!phoneRegex.test(articleData.phoneNumber.trim())) {
        errors.phoneNumber = 'Invalid phone number format.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(articleData.email.trim())) {
        errors.email = 'Invalid email format.';
        isValid = false;
    }

    return { errors, isValid };
};

export const processArticles = (posts, allUsers) => {
    if (!Array.isArray(allUsers)) {
        allUsers = [allUsers];
    }

    return posts.map((currentPost) => {
        const userId = currentPost.userId;
        const user = allUsers.find((user) => user.id === userId);

        return {
            ...currentPost,
            user,
        };
    });
};
