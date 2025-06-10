
import React from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { ClassNames } from '@emotion/react';

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:600px)');
    const isAuthenticated=true;
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar sx={{
                    height: '80px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginLeft: '240px',
                    [theme.breakpoints.down('sm')]: {
                        marginLeft: '0px',
                        flexWrap: 'wrap',
                    },
                }}>
                    {isMobile && (
                        <IconButton  
                            color='inherit'
                            edge='start'
                            sx={{ 
                                outline: 'none',
                                marginRight: theme.spacing(2),
                                [theme.breakpoints.up('sm')]: {
                                    display: 'none',
                                }
                            }}
                            onClick={() => {}}
                        >
                            <Menu/>
                        </IconButton>
                    )}
                    <IconButton color='inherit' sx={{ml:1}} onClick={()=>{}} >
                       {theme.palette.mode==='dark' ? <Brightness7/>:<Brightness4/>}
                    </IconButton>
                    {!isMobile && 'search...'}
                    <div>
                        {!isAuthenticated ? (
                            <Button color='inherit' onClick={()=>{}}>
                                login &nbsp; <AccountCircle/>
                            </Button>
                        ):(
                            <Button color='inherit'
                            component={Link} 
                            to='/profile/:id' 
                            ClassName='classes.linkbutton'
                            onclick={()=>{}}>
                                {!isMobile && <> My Movies &nbsp; </>}
                                <Avatar
                                style={{width:30, height:30}}
                                alt='profile' 
                                src="data:image/jpeg;base64,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"
                                />
                                </Button>
                        )}
                    </div>
                       {isMobile && 'search...'}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar