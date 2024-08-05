// src/App.js
import React from 'react';
import Header from './components/Header';  // Ensure this path is correct
import About from './components/About';    // Ensure this path is correct
import ArticleList from './components/ArticleList'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <Header /> {/* This should render a header element */}
      <aside className="sidebar"> {/* Ensure this class name matches the test query */}
        <About /> {/* This should render an aside element */}
      </aside>
      <main> {/* This should render a main element */}
        <ArticleList /> {/* Ensure this component is properly imported and used */}
      </main>
    </div>
  );
}

export default App;
