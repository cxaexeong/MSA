import { Link as RouterLink } from 'react-router-dom';
import {  Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FlightReserveStore from '../../../store/FlightReserveStore';
import { observer } from 'mobx-react';

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

function FlightReservationCard({flight}) {
  // db랑  같아야함
  console.log(flight);
  const { flight_id } = flight;
  const fs = FlightReserveStore;
//  onClick={()=>RoomModal(room)}
  return (
    
    <Card onClick={()=>{fs.setFlight(flight); fs.setModalOpen(true)}}>
    
      <Box sx={{ pt: '100%', position: 'relative' }}>
      <ProductImgStyle alt={flight_id.depart_dest_airport} src={flight_id.imgUrl1} />
      </Box>
      
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink} >
          <Typography variant="subtitle1" noWrap >
            {flight_id.depart_dep_airport}
            {flight_id.depart_dest_airport}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2">
            &nbsp;
            {flight_id.depart_et}
            {flight_id.return_et}
            <br/>
            {flight_id.price}
          </Typography>
        </Stack>

      </Stack>
    </Card>
    
  );
}
export default observer(FlightReservationCard);