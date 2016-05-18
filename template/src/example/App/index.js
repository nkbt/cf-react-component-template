import React from 'react';
import {{package.global}} from '../../Component';
import css from './App.css';


const App = () => (
  <div className={css.app}>
    <h1>{{package.name}}</h1>
    <{{package.global}} />
  </div>
);


export default App;
