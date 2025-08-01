import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SideBar from '../sidebar/SideBar';
import {Link} from 'react-router-dom';


function ResponsiveAppBar() {
  const [pages, setPages] = React.useState(['Home', 'Registration', 'Today tasks', 'Add task', 'Search Task']);


  
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar position="static" className='sm:!w-55 !bg-white !text-black sm:!h-screen sm:flex-col justify-start items-start pt-6'>
      <Container className='' >
        <Toolbar className='max-sm:flex-row max-sm:justify-between sm:flex-col gap-7 '>
          <Box className='sm:hidden'>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer('left', true)}
              color="inherit"
              className='p-0'
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}

          >
            todo
          </Typography>
          <Box >

            <IconButton  className='text-left'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>

          </Box>

          <Box className='max-sm:hidden sm:flex-col'>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block', textAlign: 'left' }}
              >
                <Link to={`/${page}`}>
                {page}
                </Link>
                
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
      <SideBar pages={pages} state={state} setState={setState} toggleDrawer={toggleDrawer}/>
    </AppBar>
  );
}
export default ResponsiveAppBar;
