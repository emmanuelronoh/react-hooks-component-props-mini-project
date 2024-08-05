import React from 'react';

const ArticleList = ({ posts }) => {
  return (
    <div className="article-list">
      {posts.map(post => (
        <article key={post.id} className="article-item">
          <h2>{post.title}</h2>
          <p>{post.preview}</p>
          <span>{post.date}</span>
          <span>{post.minutes} minutes read</span>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
