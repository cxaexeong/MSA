import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import FlightReserveStore from '../../../store/FlightReserveStore';
import { observer } from 'mobx-react';
import {  Grid } from '@mui/material';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};


function AirportModal() {
  const fs = FlightReserveStore;
  return (
    <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={fs.modalOpen}
        onClose={() => fs.setModalOpen(false)}
        BackdropComponent={Backdrop}
      >
     <Box sx={style}>
          <h2 id="unstyled-modal-title">{fs.flight.name}</h2>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Image size='Small' src={fs.flight.imgUrl1} wrapped /> <br/>
            <p> 출발 시작일 : {fs.flight.depart_etd} </p>
            <p>출발 종료일 : {fs.flight.depart_eta} </p>
            <p>항공사 :{fs.flight.depart_airline} </p>
            <p>출발 공항 : {fs.flight.depart_dep_airport}</p>
            <p>도착 공항 : {fs.flight.depart_dest_airport}</p>
            <p>경유지 : {fs.flight.depart_via}</p>
            <p>소요시간: {fs.flight.depart_et}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image size='Small' src={fs.flight.imgUrl2} wrapped /> <br/>
            <p> 도착 시작일 : {fs.flight.return_etd}</p>
            <p>도착 종료일 : {fs.flight.return_eta} </p>
            <p>항공사 :{fs.flight.return_airline} </p>
            <p>출발 공항 : {fs.flight.return_dep_airport}</p>
            <p>도착 공항 : {fs.flight.return_dest_airport}</p>
            <p>경유지 : {fs.flight.return_via}</p>
            <p>소요시간: {fs.flight.return_et}</p>
          </Grid>
        </Grid>
        <br/>
        <Button color='black' onClick={() => {fs.setModalOpen(false); fs.reserveAirport(fs.flight.id)}}>
          예약
        </Button>
        <Button
          content="확인"
          labelPosition='right'
          icon='checkmark'
          onClick={() => fs.setModalOpen(false)}
          positive
        />
         </Box>
      </StyledModal>
  )
}

export default observer(AirportModal)
