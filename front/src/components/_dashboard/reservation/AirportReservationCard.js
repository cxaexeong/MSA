import { Link as RouterLink } from 'react-router-dom';
import {  Grid, Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FlightReserveStore from '../../../store/FlightReserveStore';
import { observer } from 'mobx-react';
import { Item } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react'

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

function AirportReservationCard({flight}) {
  const fs = FlightReserveStore;
  return (
    
    <Card onClick={()=>{fs.setFlight(flight); fs.setModalOpen(true); fs.setCode(flight.oi_code,flight.c_code)}}>
    <Grid container spacing={1}>
    <Grid item xs={6} sm={3}>
    <Stack   spacing={1} sx={{ p: 4 }}>
      <Item>
      <Box  sx={{ pt: '30%', position: 'relative' }}>
              <ProductImgStyle alt={flight.depart_airline} src={flight.imgUrl1} />
      </Box>
          </Item>
      <Item>
      <Box  sx={{ pt: '50%', position: 'relative' }}>
              <ProductImgStyle alt={flight.return_airline} src={flight.imgUrl2} />
      </Box>
      </Item>
    </Stack>
      
    </Grid>
    <Grid item xs={6} sm={3}>
    <Stack  spacing={2} sx={{ p: 3 }}>
      <Item>
        <Typography variant="subtitle1" noWrap >
            {flight.depart_etd}
        </Typography>
      </Item>
      <Item>
        <Typography variant="subtitle1" noWrap >
          {flight.depart_dep_airport}
        </Typography>
      </Item>
      <Item>
        <Typography variant="subtitle1" noWrap >
            {flight.return_etd}
        </Typography>
      </Item>
      <Item>
        <Typography variant="subtitle1" noWrap >
          {flight.return_dep_airport}
        </Typography>
      </Item>
    </Stack>
    </Grid>
    <Grid item xs={6} sm={3}>
    <Stack   spacing={2} sx={{ p: 3 }}>
    <Item>
      <Typography variant="subtitle1" noWrap >
          {flight.depart_et}
      </Typography>
    </Item>
    <Item>
      <Typography variant="subtitle1" noWrap >
        {flight.depart_via}
      </Typography>
    </Item>
    <Item>
      <Typography variant="subtitle1" noWrap >
          {flight.return_et}
      </Typography>
    </Item>
    <Item>
      <Typography variant="subtitle1" noWrap >
        {flight.return_via}
      </Typography>
    </Item>
  </Stack>
  </Grid>

    <Grid item xs={6} sm={3}>
      <Stack  spacing={2} sx={{ p: 3 }}>
      <Item>
        <Typography variant="subtitle1" noWrap >
            {flight.depart_eta}
        </Typography>
      </Item>
      <Item>
        <Typography variant="subtitle1" noWrap >
          {flight.depart_dest_airport}
        </Typography>
      </Item>
      <Item>
        <Typography variant="subtitle1" noWrap >
            {flight.return_eta}
        </Typography>
      </Item>
      <Item>
        <Typography variant="subtitle1" noWrap >
          {flight.return_dest_airport}
        </Typography>
      </Item>
        </Stack>
    </Grid>
    </Grid>
    </Card>
    
  );
}
export default observer(AirportReservationCard);