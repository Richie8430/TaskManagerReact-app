import React from 'react'
import { CssBaseline, Switch } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import useStyles from './assets/styles';
import { Actors, MovieInformation, Movies, Profile, NavBar } from './assets';


const App = ()=>{
  const classes= useStyles();
  return (
<div className={classes.root}>
  <CssBaseline>
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <NavBar/>
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
