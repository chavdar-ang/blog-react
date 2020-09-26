import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import ArticleList from './ArticleList';

function BlogIndex() {
  return (
    <>
      <Featured />
      <Categories />
      <ArticleList />
    </>
  );
}

export default BlogIndex;
