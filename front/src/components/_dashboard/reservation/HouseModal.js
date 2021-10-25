import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import RoomReserveStore from '../../../store/RoomReserveStore';
import { observer } from 'mobx-react';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { styled, Box } from '@mui/system';
import {  Grid } from '@mui/material';

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

function RoomModal() {
  const rs = RoomReserveStore;

  return (
    <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={rs.modalOpen}
        onClose={() => rs.setModalOpen(false)}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">{rs.room.name}</h2>
          <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
          <Image size='medium' src={rs.room.imgUrl} wrapped />
          </Grid>
          <Grid item xs={12} sm={6}>
          <p id="unstyled-modal-description">
            시작일 : {rs.room.start_date}
            &nbsp;&nbsp;&nbsp;
            종료일 : {rs.room.end_date}
          </p>
          <p id="unstyled-modal-description">주소 : {rs.room.location}</p>
          <p id="unstyled-modal-description">점수 : {rs.room.rating}</p>
          <p id="unstyled-modal-description">리뷰개수 : {rs.room.reviews}</p>
          <p id="unstyled-modal-description">가격 : ₩ {rs.room.price}</p>          </Grid>
          </Grid>
          <br/>
          
        <Button
        floated='right'
          content="확인"
          labelPosition='right'
          icon='checkmark'
          onClick={() => rs.setModalOpen(false)}
          positive
        />
        <Button floated='right' color='black' onClick={() => {rs.setModalOpen(false); rs.reserveHouse(rs.room.id)}}>
          예약
        </Button>
        </Box>
      </StyledModal>

  )
}

export default observer(RoomModal)
