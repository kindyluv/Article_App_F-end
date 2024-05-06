import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './containers/Articles/Articles';
import Results from './containers/Results/Results';
import NotFound from './containers/NotFound';
import Layout from './components/Layout';
import { getUsers } from './api/UserApi';
import { getArticles } from './api/ArticleApi';
import { processArticles } from './utils';

const App = () => {
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [articles, setArticles] = useState({});


  useEffect(() =>{
    const fetchData = async () => {
      const data = await getArticles();
      setPost(data);

      const response = await getUsers();
      const ids = response.map(usr => usr.id);
      setUserIds(ids);
      setUsers(response);
    }
    fetchData();
  },[]);
  
  useEffect(() => {
    if (post.length > 0 && users.length > 0) {

      const processedArticles = processArticles(post, users)
      setArticles(processedArticles);
    }
  }, [post, users]);

  return (
    <div>
      <Layout articles={articles} setArticles={setArticles}>
      <Router>
        <Routes>
          <Route path="/" element={<Results articles={articles} setArticles={setArticles} />} />
          <Route path="/post-article" element={<Articles userIds={userIds} setArticles={setArticles} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </Layout>
    </div>
  );
}

export default App;
