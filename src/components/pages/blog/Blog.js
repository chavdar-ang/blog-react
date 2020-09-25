import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import Article from './Article';

function BlogIndex() {
  return (
    <>
      <Featured />
      <Categories />
      <Article />
    </>
  );
}

export default BlogIndex;
