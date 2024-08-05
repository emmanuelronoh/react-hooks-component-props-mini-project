import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  return (
    <article className="article-item">
      <h2>{title}</h2>
      <p>{preview}</p>
      <span>{date}</span>
      <span>{minutes} minutes read</span>
    </article>
  );
};

export default Article;
