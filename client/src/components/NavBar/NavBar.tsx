import { Grid, MenuItem } from '@mui/material';
import React from 'react';
import SearchInput from './components/SearchInput';
import User from './components/User';
import './NavBar.css';

const NavBar: React.FC = () => {

  return (

    <Grid container spacing={2}>
      <Grid item xs={3}>
        <MenuItem>
          LOGO
        </MenuItem>
      </Grid>
      <Grid item xs={6}>
        <MenuItem>
         <SearchInput />
        </MenuItem>
      </Grid>
      <Grid item xs={3}>
        <MenuItem>
         <User />
        </MenuItem>
      </Grid>
    </Grid>
  )
}

export default NavBar