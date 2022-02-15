import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './products';
import store from './store';
import Product from './product';
import { Provider } from 'react-redux';
import { AuthUserProvider, useAuth } from './AuthUserContext';
import Login from './Login';
import { useEffect } from 'react';
import Register from './Register';

function App() {
  
  const navigate = useNavigate();
  const { signOut, authUser, loading } = useAuth();

  // useEffect(() => {
  //     if (!loading && !authUser)
  //     {
  //       console.log("ok")
  //       return navigate('/login')
  //     }
  // }, [authUser, loading])
  
  return (
    
    <Provider store={store}>
    <div className="App">   
    <Navigation authUser={authUser}/>
            <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
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
    
    </Provider>
  );
}

export default App;
