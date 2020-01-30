import React from 'react';
import ReactDOM from 'react-dom'; 
import store from './store/store';
import Root from './components/root';
import { allTodos} from './reducers/selectors';

document.addEventListener('DOMContentLoaded',()=> {
  const main = document.getElementById('main');
  ReactDOM.render(<Root store={store} />, main );
});

// console.log(allTodos(store.getState()));
window.store = store;
window.allTodos = allTodos;