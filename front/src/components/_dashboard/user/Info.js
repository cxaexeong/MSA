import React from 'react';
import LoginStore from '../../../store/LoginStore';
import { observer } from 'mobx-react';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
import { Stack, TextField, InputAdornment } from '@mui/material';
import { Segment } from 'semantic-ui-react'

function Info() {
    
  
  return (
    <>
        <Box sx={{ my: 5, px: 2.5 }}>
        <Segment>
            <Typography variant="h4"  noWrap>
               ID  : {localStorage.getItem('user')}
            </Typography>
        </Segment>
        <Segment>
            <Typography variant="h4"  noWrap>
            First Name : {localStorage.getItem('firstname')}
            </Typography>
        </Segment>
        <Segment>
            <Typography variant="h4"  noWrap>
            Last Name : {localStorage.getItem('lastname')}
            </Typography>
        </Segment>
        </Box>
        
    </>
  );
}

export default observer(Info);