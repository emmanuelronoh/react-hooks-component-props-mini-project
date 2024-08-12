import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import './App.css'; // Ensure you have this CSS file if needed

// Sample data for ArticleList
const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
  },
];

const App = () => {
  return (
    <div className="App">
      <header>
        <Header name="Underreacted" />
      </header>
      <aside>
        <About
          image="https://via.placeholder.com/215" // or provide a default image path if you have one
          about="About this blog"
        />
      </aside>
      <main>
        <ArticleList posts={posts} />
      </main>
    </div>
  );
};

export default App;

