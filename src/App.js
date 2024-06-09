import React from 'react';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import TourDetails from './components/tourDetails/TourDetails';
import TestComponent from './components/TestComponent';

//app
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<TestComponent/>}/>
      <Route path='/city/:id' element={<TourDetails/>}/>
    </Routes>
    
  );
}