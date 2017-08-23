import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { App } from './containers/App';
import { NewPage } from "./containers/NewPage";

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={App}></Route> */}
        {/* <Route path="mypage" component={NewPage} /> */}
        <Route path="/" component={NewPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
