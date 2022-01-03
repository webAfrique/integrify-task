import React, { useState, useEffect } from 'react';
import {  Details, Home } from './components';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
  const [breweryList, setList] = useState([])

  useEffect(()=>{
    axios.get('https://api.openbrewerydb.org/breweries')
    .then(response => setList(response.data))
    .catch(error => console.log(error))
  },[])

  return <Router>
    <Routes>
      <Route path="/" element={<Home breweries={breweryList} setList={setList}/>}></Route>
      <Route path="/details/:id" element={<Details breweries={breweryList}/>}/>
    </Routes>
  </Router>
}



export default App;
