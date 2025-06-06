import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Typography variant='h6' component="div" sx={{flexGrow:1}}>
              Student Management App
            <Button>
                <Link to={'/view'} style={{color:'white',textDecoration:'none'}}></Link>
            </Button>
            <Button>
                <Link to={'/'} style={{color:'white',textDecoration:'none'}}></Link>
            </Button>
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
