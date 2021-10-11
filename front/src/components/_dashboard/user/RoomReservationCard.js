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

function RoomReservationCard({room}) {
  // db랑 변수명 같아야함
  const { room_id } = room;
  const rs = RoomReserveStore;
//  onClick={()=>RoomModal(room)}
  return (
    
    <Card onClick={()=>{rs.setRoom(room); rs.setModalOpen(true)}}>
    
      <Box sx={{ pt: '100%', position: 'relative' }}>
      <ProductImgStyle alt={room_id.name} src={room_id.imgUrl} />
      </Box>
      
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink} onClick={()=>console.log(room_id.name)}>
          <Typography variant="subtitle1" noWrap >
            {room_id.name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2">
            &nbsp;
            {room_id.location}
          </Typography>
        </Stack>

      </Stack>
    </Card>
    
  );
}
export default observer(RoomReservationCard);