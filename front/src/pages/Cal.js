// import styled from 'styled-components;'
import { Container, Stack, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { useState } from 'react';
import Page from '../components/Page';
import React from 'react';
import Modal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";
import ProductStore from '../store/ProductStore';
import { Form } from 'semantic-ui-react'
import { Link as RouterLink, useNavigate  } from 'react-router-dom';
import { Segment } from 'semantic-ui-react'
// ----------------------------------------------------------------------
const Button = styled.button` 
padding: 6px 12px;
color: white;
font-size: 16px;
border: none;
border-radius: 4px;
background-color: #74b9ff;
:hover { background-color: #99c6f5; }
 `;

export default function Calendar() {
  const navigate = useNavigate();

  
    // console.log(ProductStore.product);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState();
    let subtitle;
    const [msgOpen, setmsgOpen] = useState(false);
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
  };
   

  //   function openModal() {
  //     setIsOpen(true);
  //   }
  
  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   }
  
  //   function closeModal() {
  //     setIsOpen(false);
  // }

  return (
    <Page title="Dashboard: Calendar | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Calendar
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
       
        </Stack>
        <div>
        <Form>
            <Form.Group >
              <Form.Field>
                  <label>시작일</label>
              <DatePicker className="startdate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat='yyyy-MM-dd'
        />
              </Form.Field>

                <Form.Field>
                  <label>마지막일</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  dateFormat='yyyy-MM-dd'
          />
            </Form.Field>   
            </Form.Group>    
      </Form>
      <Button onClick={()=>setmsgOpen(true)}>거리두기 현황</Button>

        </div>
      
      {msgOpen &&
      <>
      <Segment>
      
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>거리두기 현황</h2>
       
            
          <h4>[단계] {ProductStore.product.stage}</h4>
          <h4>[코멘트] {ProductStore.product.comment}</h4>
      <Button  onClick={()=>{navigate('/dashboard/blog/', { replace: true }); ProductStore.setDate(startDate,endDate) } }>
        예약하러가기     </Button>&nbsp;&nbsp;&nbsp;
      <Button  onClick={()=>navigate('/dashboard/products/', { replace: true }) }>다른지역보기</Button>
        
     </Segment>
       
       </>
  }
      </Container>
    </Page>
  );
}
