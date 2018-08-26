import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import * as API from './utils/api';
import { fetchContact } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

API.getAll()
    .then(data => store.dispatch(fetchContact(data.contacts)))
    .catch(reason => console.log(reason.message))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
