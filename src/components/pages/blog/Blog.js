import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import ArticleList from './ArticleList';

// test
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';

function Blog(props) {
  props.setAlert('test message', 'success');
  return (
    <main>
      <Featured />
      <Categories />
      <ArticleList />
    </main>
  );
}

export default connect(null, { setAlert })(Blog);
