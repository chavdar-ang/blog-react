import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer/Footer';
import Blog from './components/pages/blog/Blog';
import Post from './components/pages/post/Post';

function App() {
  return (
    <div className="container-lg">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/show" component={Post} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
