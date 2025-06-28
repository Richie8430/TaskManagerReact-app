import React from 'react'
import { CssBaseline, Switch } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Actors, MovieInformation, Movies, Profile, NavBar } from './assets';


const App = ()=>{
  const styles={
        root: {
        display:'flex',
        height:'100%'
    },
   toolbar: {
        height:'70px'
    },
    content:{
        flexGrow:'1',
        padding:'2em',
    }
  };
  return (
<div style={styles.root}>
  <CssBaseline>
     <NavBar/>
    <main style={styles.content}>
      <div style={styles.toolbar}/>
      <Routes>
        <Route path='/movie/:id' element={<MovieInformation/>}/>
        <Route path='/actors/:id' element={<Actors/>}/>
        <Route path='/' element={<Movies/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
      </Routes>
    </main>
  </CssBaseline>
  </div>
  );
}

export default App
