import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer/Footer';
import Blog from './components/pages/blog/Blog';
import Post from './components/pages/post/Post';

// The alert component
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Actions
import { addAlert } from './store/alerts';
import * as actions from "./store/api";


const store = configureStore();

store.dispatch(addAlert({ message: 'warning type alert', alertType: 'warning' }));
store.dispatch(addAlert({ message: 'danger type alert', alertType: 'danger' }));

store.dispatch(actions.apiCallBegan({
  url: "/threads",
  onSuccess: "threadsReceived",
}));

function App() {
  return (
    <div className="container-lg">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
            <main>
              <Alert />
              <Switch>
                <Route exact path="/" component={Blog} />
                <Route path="/single" component={Post} />
              </Switch>
            </main>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
