import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './products';
import Product from './product';

function App() {
  return (
    <div className="App">   
    <Navigation/>
            <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/> 
          <Route path='/Product' element={<Product/>}/>                
        </Routes>         
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <h1 id='basmati'>About Basmati</h1>
        
      </body>
    </div>
  );
}

export default App;
