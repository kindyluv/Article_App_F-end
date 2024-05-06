import { suite } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getArticlesByArticleId, getArticlesByUserId, getArticlesByTitle, getArticles, postArticle } from './ArticleApi';
import { getUserByAuthorName, getUserByUserId, getUserByUserName, createUser, getUsers } from './UserApi';

const articles = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  }
];

const users = [
  {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
];

export default suite('API Tests', test => {
  let mock = new MockAdapter(axios);

  test('should fetch articles', async () => {
    let mock = new MockAdapter(axios);
    mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, articles);

    const response = await getArticles();
    test.expect(response).toEqual(articles);
  });

  test('should fetch articles by title', async () => {
    const title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    mock.onGet(`https://jsonplaceholder.typicode.com/posts?title=${articles[0].title}`).reply(200, articles[0]);

    const response = await getArticlesByTitle(title);
    test.expect(response).toEqual(articles[0]);
  });

  test('should fetch articles by user ID', async () => {
    mock.onGet(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`).reply(200, articles[1]);

    const response = await getArticlesByUserId(users[0].id);
    test.expect(response).toEqual(articles[1]);
  });

  test('should fetch article by article ID', async () => {
    const articleId = 1;
    mock.onGet(`https://jsonplaceholder.typicode.com/posts/${articleId}`).reply(200, articles[0]);

    const response = await getArticlesByArticleId(articleId);
    test.expect(response).toEqual(articles[0]);
  });

  test('should create a new article', async () => {
    const articleData = { title: 'Article is live', userId: 2, body: 'Article is live Article is live' };
    const createdArticle = { id: 101, ...articleData };
    mock.onPost('https://jsonplaceholder.typicode.com/posts').reply(201, createdArticle);

    const response = await postArticle(articleData);
    test.expect(response).toEqual(createdArticle);
  });

  test('should fetch user by author name', async () => {
    const authorName = 'Leanne Graham';
    mock.onGet(`https://jsonplaceholder.typicode.com/users?name=${authorName}`).reply(200, [users[0]]);

    const response = await getUserByAuthorName(authorName);
    test.expect(response).toEqual([users[0]]);
  });

  test('should fetch user by username', async () => {
    const username = 'Antonette';
    mock.onGet(`https://jsonplaceholder.typicode.com/users?username=${username}`).reply(200, [users[1]]);

    const response = await getUserByUserName(username);
    test.expect(response).toEqual([users[1]]);
  });

  test('should fetch user by user ID', async () => {
    const userId = 1;
    mock.onGet(`https://jsonplaceholder.typicode.com/users/${userId}`).reply(200, users[0]);

    const response = await getUserByUserId(userId);
    test.expect(response).toEqual(users[0]);
  });

  test('should create a new user', async () => {
    const userData = {
        "name": "Precious Lois",
        "username": "Loisy",
        "email": "lois@examplemail.com",
        "address": {
          "street": "Street of Lagos",
          "suite": "Suite 9",
          "city": "Lagos",
          "zipcode": "0000000",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "+234-692-6593 x09125",
        "website": "loisy.com",
    }
    const createdUser = {id: 3, ...userData }
    mock.onPost('https://jsonplaceholder.typicode.com/users').reply(201, createdUser);

    const response = await createUser(userData);
    test.expect(response).toEqual(createdUser);
  });

  test('should fetch all users', async () => {
    mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, users);

    const response = await getUsers();
    test.expect(response).toEqual(users);
  });
});
