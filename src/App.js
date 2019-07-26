import React from 'react';
import Menu from './Menu/Menu';
import First from './firstSection/first';
import Second from './section2/Second';
import Book from './book/Book';
import Collabs from './collabs/Collabs';
import Building from './building/Building';
import Other from './other/Other';
import Footer from './footer/footer';
// import {Route} from 'react-router-dom';
import './App.css';

class App extends React.Component{
 

  // homeRender(){
  //   return(

  //   );
  // }

  render(){
    return (
      <div className="App">
        <nav className="head-menu">
          <Menu/>
        </nav>
        <main>
          <First/>
          <Second/>
          <Book/>
          <Collabs/>
          <Building/>
          <Other/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
