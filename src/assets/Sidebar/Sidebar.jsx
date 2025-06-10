// import React, {useEffect} from 'react';
// import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';
// import useStyles from './styles'

// const Sidebar = ({setMobileOpen}) => {
//     const Theme = useTheme();
//     const classes=useStyles();
    
//     const styles = {
//     imageLink: { display:'flex',
//        justifyContent: 'center',
//        padding:'10% 0'
//     },
//     image:{
//         width:'70%'
//     },
//     links:{
//         color: Theme.palette.text.primary,
//         textDecoration: 'none',
//     },
//     genreImage:{
//         filter: Theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
//     },
    
//     }

//     const categories =[
//         {label: 'Popular', value: 'popular'},
//         {label: 'Top Rated', value: 'top_rated'},
//         {label: 'Upcoming', value: 'upcoming'},
//     ]
//      const demoCategories =[
//         {label: 'Comedy', value: 'comedy'},
//         {label: 'Action', value: 'actions'},
//         {label: 'Animations', value: 'animations'},
//         {label: 'Horror', value: 'horror'},
//     ]
//     const blueLogo='https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
//      const redLogo='https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
//   return (
//     <>
//     <Link to="/" className={styles.imageLink}>
//      <img className={styles.image}
//      src={ Theme.palette.mode=== 'light' ? blueLogo : redLogo} alt="FilmPire logo" />
//     </Link>
//     <Divider/>
//     <List>
//         <ListSubheader>Categories</ListSubheader>
//         {Categories.map((label, value)=>(
//           <Link key={value} className={styles.links} to='/'>
//             <ListItem onClick={()=>{}} button>
//                 <ListItemIcon>
//                     {/* <img src='' className={styles.genreImages} height={30} /> */}
//                 </ListItemIcon>
//                 <ListItemText primary={label}/>
//             </ListItem>
//           </Link>
//         ))}
//     </List>
//     <Divider/>
//     <List>
//         <ListSubheader>Genres</ListSubheader>
//         {demoCategories.map((label, value)=>(
//           <Link key={value} className={classes.links} to='/'>
//             <ListItem onClick={()=>{}} button>
//                 <ListItemIcon>
//                     {/* <img src='' className={classes.genreImages} height={30} /> */}
//                 </ListItemIcon>
//                 <ListItemText primary={label}/>
//             </ListItem>
//           </Link>
//         ))}
//     </List>
//     </>
//   )
// }

// export default Sidebar

import React, {useEffect} from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme(); // Changed to lowercase for consistency
    
    const styles = {
        imageLink: { 
            display:'flex',
            justifyContent: 'center',
            padding:'10% 0'
        },
        image:{
            width:'70%'
        },
        links:{
            color: theme.palette.text.primary, // Fixed: theme (lowercase) and palette (correct spelling)
            textDecoration: 'none',
        },
        genreImage:{
            filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)', // Fixed: theme and palette
        },
    }

    const categories = [ // Fixed: lowercase 'categories'
        {label: 'Popular', value: 'popular'},
        {label: 'Top Rated', value: 'top_rated'},
        {label: 'Upcoming', value: 'upcoming'},
    ]
    
    const demoCategories = [
        {label: 'Comedy', value: 'comedy'},
        {label: 'Action', value: 'actions'},
        {label: 'Animations', value: 'animations'},
        {label: 'Horror', value: 'horror'},
    ]
    
    const blueLogo='https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
    const redLogo='https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
    
    return (
        <>
            <Link to="/" style={styles.imageLink}> {/* Changed className to style */}
                <img style={styles.image} /* Changed className to style */
                     src={theme.palette.mode === 'light' ? blueLogo : redLogo} 
                     alt="FilmPire logo" />
            </Link>
            <Divider/>
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({label, value}) => ( // Fixed: categories (lowercase) and destructured properly
                    <Link key={value} style={styles.links} to='/'>
                        <ListItem onClick={() => {}} button>
                            <ListItemIcon>
                                {/* <img src='' style={styles.genreImage} height={30} /> */}
                            </ListItemIcon>
                            <ListItemText primary={label}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider/>
            <List>
                <ListSubheader>Genres</ListSubheader>
                {demoCategories.map(({label, value}) => ( // Fixed: destructured properly
                    <Link key={value} style={styles.links} to='/'>
                        <ListItem onClick={() => {}} button>
                            <ListItemIcon>
                                {/* <img src='' style={styles.genreImage} height={30} /> */}
                            </ListItemIcon>
                            <ListItemText primary={label}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    )
}

export default Sidebar

