import React from 'react';
import { observer } from 'mobx-react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import TodoStore from '../../../store/TodoStore';
import { Button, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import { useState,useEffect } from 'react';
import moment from 'moment';

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

function TodoModal() {
  const ts = TodoStore;

  // let sd = moment(ts.start_date).toDate();
  // let ed = moment(ts.end_date).toDate();

  // const [startDate, setStartDate] = useState(sd);
  // const [endDate, setEndDate] = useState(ed);

    return (
        <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={ts.modalOpen}
        onClose={() => ts.setModalOpen(false)}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
        <Form>
            <Form.Group >
            <Form.Field>
                <label>시작일</label>
                <DatePicker
                    selected={ts.selectedStartDate}
                    onChange={(date) => {ts.setStartDate(date);ts.setSelectedStartDate(date)}}
                    selectsStart
                    startDate={ts.selectedStartDate}
                    endDate={ts.selectedEndDate}
                    dateFormat='yyyy-MM-dd'
                /> 
            </Form.Field>
            <Form.Field>
                <label>마지막일</label>
                <DatePicker
                selected={ts.selectedEndDate}
                onChange={(date) => {ts.setEndDate(date);ts.setSelectedEndDate(date)}}
                selectsEnd
                startDate={ts.selectedStartDate}
                endDate={ts.selectedEndDate}
                minDate={ts.selectedStartDate}
                dateFormat='yyyy-MM-dd'
            />
            </Form.Field>
        
            <Form.Field label='일정' control='input'  
            value={ts.title} onChange={(e)=>ts.setTitle(e.target.value)}
            style={{minWidth:"30em"}}/>
            </Form.Group>
            
            <Form.Field label='내용' control='textarea' rows='3' 
            value={ts.contents} onChange={(e)=>ts.setContents(e.target.value)}
            />

            <Button
            content="수정"
            labelPosition='right'
            icon='checkmark'
            onClick={() => ts.todoUpdate()}
            positive
            />
            <Button
          content="확인"
          color='black'
          onClick={() => ts.setModalOpen(false)}
        />
    </Form>
        </Box>
      </StyledModal>
    );
}

export default observer(TodoModal);