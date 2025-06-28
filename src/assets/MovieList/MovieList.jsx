import React from 'react'
import { Grid, useTheme } from '@mui/material';
import { Movie } from '..';

const MovieList = ({movies}) => {
  const theme = useTheme();

    const styles={
       moviesContainer: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          overflow: 'auto',
          [theme.breakpoints.down('sm')]:{
            justifyContent:'center',
        },
    },
  }
    
  return (
    <Grid container style={styles.moviesContainer}>
        {movies.results.map((movie, i)=>(
            <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid>
  )
}

export default MovieList
