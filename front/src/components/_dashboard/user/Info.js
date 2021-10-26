import React from 'react';
import LoginStore from '../../../store/LoginStore';
import { observer } from 'mobx-react';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
import { Stack, TextField, InputAdornment } from '@mui/material';
import { Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';



function Info() {
  const ls = LoginStore;

  const navigate = useNavigate();

  const DeleteUser = ()=>{  
    if(window.confirm('정말 삭제하시겠습니까 ?')===true){
        fetch('http://localhost:8000/user/current/', {
            headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json(), console.log(localStorage.getItem('token')))
        .then(json => {
            fetch('http://localhost:8000/user/auth/profile/' + json.id + '/delete/',{
                method : 'DELETE',
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
            })
            .then((res)=>res.json(), ls.handleLogout(),
            navigate('/dashboard/app', { replace: true }))
            .catch(error => {
                console.log(error);
                });;
        }).catch(error => {
            console.log(error)
        });
    }
  }


  
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
        <Box sx={{ width:300, height:100, px:2.5}}>
        <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            iconsize="small"
            onClick={DeleteUser}
            style={{backgroundColor: '#f44336', color: '#FFFFFF'}}

          >
            회원탈퇴
          </LoadingButton>
          </Box>
        {/* <Button onClick={DeleteUser}>탈퇴</Button> */}
        
    </>
  );
}

export default observer(Info);