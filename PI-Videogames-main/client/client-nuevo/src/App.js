import styles from '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import LandingPage from './Components/Lading Page/LadingPage.jsx';
import Home from './Components/Home/Home.jsx';
import VideoGameCreate from './Components/Video Games/Create.jsx';
import Details from "./Components/Details/Details.jsx";
// 
function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/videogames' element={<VideoGameCreate />} />
          <Route path='/videogames/:id' element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;