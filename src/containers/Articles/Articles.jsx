import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './Articles.css';
import { MainContainer, Text, Form, Textarea } from './Styles';
import Warning from '../../components/Warning';
import { validateForm } from '../../utils';
import { createUser } from '../../api/UserApi';
import { postArticle } from '../../api/ArticleApi';

const Articles = ({userIds, setArticles}) => {
  const [loading, setLoading] = useState(false);
    const [articleData, setArticleData] = useState({
        title: '',
        name: '',
        website: '',
        userName: '',
        phoneNumber: '',
        email: '',
        content: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        userName: '',
        phoneNumber: '',
        email: '',
        title: '',
        website: '',
        content: '',
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      const {errors, isValid} = validateForm(articleData);
      setValidationErrors(errors);
  
      if (!isValid) {
          return;
      }

      const randomUserId = userIds[Math.floor(Math.random() * userIds?.length)];
      const randomId = Math.floor(Math.random() * 100) + 1;

      setLoading(true);
      const requestBody = {
        title: articleData?.title,
        userId: randomUserId,
        body: articleData.content,
      }

      const createUserRB = {
        email: articleData?.email,
        id: randomId,
        name: articleData?.name,
        phone: articleData?.phone,
        userId: randomUserId,
        username: articleData?.userName,
        website: articleData?.website
      };

      try {
        
      const response = await postArticle(requestBody);
      const createUserResponse = await createUser(createUserRB);
      setArticles(prevArticles => [...prevArticles, { ...response, user: createUserResponse }]);
    } catch (error) {
        console.error('Error submitting article:', error);
    } finally {
        setLoading(false);
    }
  };

    return (
        <MainContainer>
            <Text>Create Article</Text>
            <Form onSubmit={handleSubmit}>
                <Input
                    className={'articleInput'}
                    type="text"
                    value={articleData.name}
                    onChange={(e) => setArticleData({ ...articleData, name: e.target.value })}
                    placeholder="Name"
                    required
                />
                {validationErrors.name && <Warning>{validationErrors.name}</Warning>}
                <Input
                    className={'articleInput'}
                    type="text"
                    value={articleData.userName}
                    onChange={(e) => setArticleData({ ...articleData, userName: e.target.value })}
                    placeholder="User Name"
                    required
                />
                {validationErrors.userName && <Warning>{validationErrors.userName}</Warning>}
                <Input
                    className={'articleInput'}
                    type="tel"
                    value={articleData.phoneNumber}
                    onChange={(e) => setArticleData({ ...articleData, phoneNumber: e.target.value })}
                    placeholder="Phone Number"
                    required
                />
                {validationErrors.phoneNumber && <Warning>{validationErrors.phoneNumber}</Warning>}
                <Input
                    className={'articleInput'}
                    type="email"
                    value={articleData.email}
                    onChange={(e) => setArticleData({ ...articleData, email: e.target.value })}
                    placeholder="Email"
                    required
                />
                {validationErrors.email && <Warning>{validationErrors.email}</Warning>}
                <Input
                    className={'articleInput'}
                    type="text"
                    value={articleData.title}
                    onChange={(e) => setArticleData({ ...articleData, title: e.target.value })}
                    placeholder="Title"
                    required
                />
                {validationErrors.title && <Warning>{validationErrors.title}</Warning>}
                <Input
                    className={'articleInput'}
                    type="text"
                    value={articleData.website}
                    onChange={(e) => setArticleData({ ...articleData, website: e.target.value })}
                    placeholder="Website"
                    required
                />
                {validationErrors.website && <Warning>{validationErrors.website}</Warning>}
                <Textarea
                    className={'articleInput'}
                    value={articleData.content}
                    onChange={(e) => setArticleData({ ...articleData, content: e.target.value })}
                    placeholder="Content"
                    required
                />
                {validationErrors.content && <Warning>{validationErrors.content}</Warning>}
                <Button className={'articlesBtn'} type="submit" label={loading ? "Submitting..." : "Submit"} onClick={handleSubmit} disabled={loading} />
            </Form>
        </MainContainer>
    );
};

export default Articles;
