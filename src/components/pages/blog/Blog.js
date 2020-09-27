import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import ArticleList from './ArticleList';

function Blog() {
  return (
    <main>
      <Featured />
      <Categories />
      <ArticleList />
    </main>
  );
}

export default Blog;
