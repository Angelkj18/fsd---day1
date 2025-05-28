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
            <Typography>
            <Button>
                <Link to={'/l'} style={{color:'white',textDecoration:'none'}}>Login</Link>
            </Button>
            <Button>
                <Link to={'/e'} style={{color:'white',textDecoration:'none'}}>Example</Link>
            </Button>
            <Button>
                <Link to={'/c'} style={{color:'white',textDecoration:'none'}}>Counter</Link>
            </Button>
            <Button>
                <Link to={'/cd'} style={{color:'white',textDecoration:'none'}}>Card</Link>
            </Button>
            <Button>
                <Link to={'/'} style={{color:'white',textDecoration:'none'}}>DataFetch</Link>
            </Button>
            </Typography>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Register/Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
