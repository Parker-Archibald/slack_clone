import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Chat from '../Components/Chat';
import Welcome from '../Components/Welcome';

const Routing = () => {
    return (
        <Routes>
              <Route path='/' element={<Welcome/>}/>
              <Route path='/room/:roomId' element={<Chat/>}/>
        </Routes>
    )
}

export default Routing;