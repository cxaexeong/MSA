import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import FlightReserveStore from '../../../store/FlightReserveStore';
import { observer } from 'mobx-react';

function FlightModal() {
  const fs = FlightReserveStore;

  return (
    <Modal
      onClose={() => fs.setModalOpen(false)}
      onOpen={() => fs.setModalOpen(true)}
      size='small'
      open= {fs.modalOpen}
    > 
      <Modal.Header>{fs.name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={fs.imgUrl1} wrapped />
        <Image size='medium' src={fs.imgUrl2} wrapped />
        <Modal.Description>
          <Header>{fs.depart_airline}{fs.return_airline}</Header>
          <p>
            출발 시작일 : {fs.depart_etd}
            &nbsp;&nbsp;&nbsp;
            출발 종료일 : {fs.depart_eta}
          </p>
          <p>항공사 :{fs.depart_airline} </p>
          <p>출발 공항 : {fs.depart_dep_airport}</p>
          <p>도착 공항 : {fs.depart_dest_airport}</p>
          <p>출발 경유지 : {fs.depart_via}</p>
          <p>소요시간: {fs.depart_et}</p>

          <p>
            도착 시작일 : {fs.return_etd}
            &nbsp;&nbsp;&nbsp;
            도착 종료일 : {fs.return_eta}
            </p>
            <p>   도착 경유지 : {fs.return_via}</p>
          <p>가격 : {fs.price}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => {fs.setModalOpen(false); fs.deleteRoomReservation()}}>
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
  )
}

export default observer(FlightModal)