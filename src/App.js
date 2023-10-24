import React, { useEffect, useRef, useState } from 'react';
import {HashRouter, Route,Routes} from "react-router-dom";
import Home from './Screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import './assets/css/section.css';
import './assets/css/media.css';

const App = (props)=> {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;