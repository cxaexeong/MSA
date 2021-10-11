import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import RoomReserveStore from '../../../store/RoomReserveStore';
import { observer } from 'mobx-react';

function RoomModal() {
  const rs = RoomReserveStore;

  return (
    <Modal
      onClose={() => rs.setModalOpen(false)}
      onOpen={() => rs.setModalOpen(true)}
      size='small'
      open= {rs.modalOpen}
    > 
      <Modal.Header>{rs.name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={rs.imgUrl} wrapped />
        <Modal.Description>
          <Header>{rs.name}</Header>
          <p>
            시작일 : {rs.room.start_date}
            &nbsp;&nbsp;&nbsp;
            종료일 : {rs.room.end_date}
          </p>
          <p>주소 : {rs.location}</p>
          <p>추가 정보 : 자세한주소, 가격, 룸넘버</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => {rs.setModalOpen(false); rs.deleteRoomReservation()}}>
          예약취소
        </Button>
        <Button
          content="확인"
          labelPosition='right'
          icon='checkmark'
          onClick={() => rs.setModalOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default observer(RoomModal)