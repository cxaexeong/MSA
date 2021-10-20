import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import FlightReserveStore from '../../../store/FlightReserveStore';
import { observer } from 'mobx-react';
import {  Grid } from '@mui/material';
import styled from 'styled-components'

const ModalLocation = styled.div`
margin-left: 100%;
`;


function FlightModal() {
  const fs = FlightReserveStore;

  return (
    <ModalLocation>
    <Modal
      onClose={() => fs.setModalOpen(false)}
      onOpen={() => fs.setModalOpen(true)}
      size='small'
      open= {fs.modalOpen}
    > 
      <Modal.Header>{fs.name}</Modal.Header>
      <Modal.Content image>

        <Modal.Description>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Image size='Small' src={fs.imgUrl1} wrapped />
            <p> 출발 시작일 : {fs.depart_etd} </p>
            <p>출발 종료일 : {fs.depart_eta} </p>
            <p>항공사 :{fs.depart_airline} </p>
            <p>출발 공항 : {fs.depart_dep_airport}</p>
            <p>도착 공항 : {fs.depart_dest_airport}</p>
            <p>경유지 : {fs.depart_via}</p>
            <p>소요시간: {fs.depart_et}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image size='Small' src={fs.imgUrl2} wrapped />
            <p> 도착 시작일 : {fs.return_etd}</p>
            <p>도착 종료일 : {fs.return_eta} </p>
            <p>항공사 :{fs.return_airline} </p>
            <p>출발 공항 : {fs.return_dep_airport}</p>
            <p>도착 공항 : {fs.return_dest_airport}</p>
            <p>경유지 : {fs.return_via}</p>
            <p>소요시간: {fs.return_et}</p>
          </Grid>
        </Grid>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => {fs.setModalOpen(false); fs.deleteFlightReservation()}}>
          예약취소
        </Button>
        <Button
          content="확인"
          labelPosition='right'
          icon='checkmark'
          onClick={() => fs.setModalOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
    </ModalLocation>
  )
}

export default observer(FlightModal)