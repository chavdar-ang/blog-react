import React from 'react';
import { useDispatch } from 'react-redux';
import Featured from './Featured';
import Categories from './Categories';
import ArticleList from './ArticleList';
import { loadArticles } from '../../../store/articles';


function Blog() {
  const dispatch = useDispatch();
  
  dispatch(loadArticles());

  return (
    <main>
      <Featured />
      <Categories />
      <ArticleList />
    </main>
  );
}

export default Blog;
