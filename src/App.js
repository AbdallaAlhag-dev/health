import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Project } from './component/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills />
      <Project />
      
    </div>
  );
}

export default App;
