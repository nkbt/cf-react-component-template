import React from 'react';
import {{curly.left}}{{package.global}}{{curly.right}} from '../..';
import css from './App.css';


const App = () => (
  <div className={css.app}>
    <h1>{{package.name}}</h1>
    <{{package.global}} />
  </div>
);


export default App;
