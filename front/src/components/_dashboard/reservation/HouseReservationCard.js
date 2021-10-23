import { Link as RouterLink } from 'react-router-dom';
import {  Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import RoomReserveStore from '../../../store/RoomReserveStore';
import { observer } from 'mobx-react';

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

function HouseReservationCard({room}) {
  // db랑 변수명 같아야함
  const rs = RoomReserveStore;
//  onClick={()=>RoomModal(room)}
  return (
    
    <Card onClick={()=>{rs.setRoom(room); rs.setModalOpen(true); rs.setCode(room.oi_code, room.c_code)}}>
    
      <Box sx={{ pt: '100%', position: 'relative' }}>
      <ProductImgStyle alt={room.name} src={room.imgUrl} />
      </Box>
      
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink} onClick={()=>console.log(room.name)}>
          <Typography variant="subtitle1" noWrap >
            {room.name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2">
            &nbsp;
            {room.location}
            <br/>
            {room.price}
          </Typography>
        </Stack>

      </Stack>
    </Card>
    
  );
}
export default observer(HouseReservationCard);