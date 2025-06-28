import React from 'react'
import { Typography, Grid, Tooltip, Grow, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';

const Movie = ({movie, i}) => {
  const theme= useTheme();

    const styles={
      movie :{
         padding: '10px',
      },
      links:{
        alignItems:'center',
        fontWeight:'bolder',
        textDecoration:'none',
        [theme.breakpoints.up('xs')]:{
          display:'flex',
          flexDirection:'column'
        },
        '&:hover':{
          cursor:'pointer',
        },
      },
      image:{
        borderRadius:'20px',
        height:'300px',
        marginBottom:'10px',
          '&:hover':{
          transform: 'scale(1.05)',
        },
      },
      title: {
        color: theme.palette.text.primary,
        textOverflow:'ellipsis',
        width:'230px',
        whiteSpace:'nowrap',
        overflow:'hidden',
        marginTop:'10px',
        marginBottom:0,
      }
    }
    
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={styles.movie}>
      <Grow in key={i} timeout={(i + 1)*250}>
        <Link style={styles.links} to={`/movie/${movie.id}`}>
        <img alt={movie.title} style={styles.image} 
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://www.fillmurray.com/200/300/"}/>
        </Link>
      </Grow>
       <Typography style={styles.title} variant="h5">{movie.title}</Typography>
       <Tooltip  disableTouchListener title={`${movie.vote_average}/ 10`}>
        <div>
          <Rating readOnly value={movie.vote_average /2} precision={0.1}/>
        </div>
       </Tooltip>
       </Grid>
  )
}

export default Movie
