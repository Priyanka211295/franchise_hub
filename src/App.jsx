import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/routing/topbar/Topbar';
import Home from './components/routing/home/Home';
import Signup from './components/routing/signup/Signup';
import Login from './components/routing/login/Login';
import Adminlogin from './components/routing/admin/Adminlogin';
import Big from './components/axioss/Big';
import Applications from './components/axioss/Applications';


function App() {
  return (
    <BrowserRouter>
      <TopBar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/apply' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path="/details/:uid" element={<Details />} /> */}
        <Route path='/adminlogin' element={<Adminlogin />} />
        <Route path ='/application' element={<Applications/>} />
        <Route path="/big/*" element={<Big/>}/>
         
        

      </Routes>
      
    </BrowserRouter>
  );
}
export default App;

