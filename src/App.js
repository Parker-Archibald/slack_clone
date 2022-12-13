import './Styles/App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import Routing from './Config/Routing';
import React, {useState} from 'react';
import Login from './Components/Login';
import { useStateValue } from './Config/StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">

      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            <Header/>

            <div className='app_body'>
                <Sidebar/>
                <Routing/>
            </div>
          </>
        )
        }
        
        
      </Router>
    </div>
  );
}

export default App;
