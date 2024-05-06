import React from 'react'
import TopNav from '../TopNav'
import Footer from '../Footer'

const Layout = ({children, articles, setArticles}) => {
  return (
    <div>
    <TopNav articles={articles} setArticles={setArticles} />
    <div style={{ paddingBottom: '60px' }}>
      {children}
    </div>
    <Footer />
  </div>
  )
}

export default Layout;