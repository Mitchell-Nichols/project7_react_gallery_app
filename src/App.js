import React from 'react';
import Search from './Search';
import Nav from './Nav';
import Result from './Result';

const App = () => {
  return (
    <div class="container">
        <Search />
    <form className="search-form">
        <Nav />
    </form>
        <Result />
    </div>
  );
}

export default App;
