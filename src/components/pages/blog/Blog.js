import React from 'react';
import Featured from './Featured';
import Categories from './Categories';
import ArticleList from './ArticleList';

// test
import { connect } from 'react-redux';
import { addAlert } from '../../../store/alerts';

function Blog(props) {
  props.addAlert({ message: 'test message', alertType: 'success' });
  props.addAlert({ message: 'test message 1', alertType: 'success' });
  return (
    <main>
      <Featured />
      <Categories />
      <ArticleList />
    </main>
  );
}

export default connect(null, { addAlert })(Blog);
