// material
import { Container, Stack, Button} from '@mui/material';
import { Menu, Select, } from 'semantic-ui-react'
// components
import Page from '../components/Page';
import { RoomReservationList, FlightReservationList,  TodoList } from '../components/_dashboard/user';
import RoomReserveStore from '../store/RoomReserveStore';
import FlightReserveStore from '../store/FlightReserveStore';
import { useState,useEffect } from 'react';
import SelectOptions from '../store/SelectOptions';

// ----------------------------------------------------------------------

export default function MyPage() {
  const [menu, setMenu] = useState(0);
  const [oiselect, oisetSelect] = useState(99);
  const [cselect, csetSelect] = useState(99);

  const rs = RoomReserveStore;
  const fs = FlightReserveStore;
  const oiOptions = SelectOptions.oiOptions;
  const cOptions00 = SelectOptions.cOptions00;
  const cOptions01 = SelectOptions.cOptions01;
  const cOptions99 = SelectOptions.cOptions99;

  useEffect(() => {
    console.log("********");
    console.log(localStorage.getItem('token'));
    rs.selectRoomReservation('99','99');
  },[]);

  const oisetCode = (e, {value}) => {
    // e.persist();
    // console.log(value);
    oisetSelect(value);
  };

  const csetCode = (e, {value}) => {
    // e.persist();
    csetSelect(value);
  };

  const setList = () => {
    if (menu === 0){
      // user info get
    }
    else if(menu === 1){
      // flight list filtering
      fs.selectFlightReservation(oiselect, cselect);
    }
    else if(menu === 2){
      // room list filtering
      rs.selectRoomReservation(oiselect, cselect);
    }
    else if(menu === 3){
      // schedule list filtering
    }
  };

  return (
    // title:tab에 적힐 메세지
    <Page title="Dashboard: Products | Minimal-UI"> 
      <Container>
      
        <Stack>         
        <Menu compact >
        <Menu.Item onClick={()=>setMenu(0)}
          name='info'
        >Info
        </Menu.Item>
        <Menu.Item onClick={()=>setMenu(1)}
          name='Flight'
        >Flight
        </Menu.Item>
        <Menu.Item onClick={()=>setMenu(2)}
          name='Room'
        >Room
        </Menu.Item>
        <Menu.Item onClick={()=>setMenu(3)}
          name='Schedule'
        >Schedule
        </Menu.Item>
          <Select placeholder='----------' options={oiOptions} onChange={oisetCode}/> 
          {oiselect === "00" &&
            <Select placeholder='----------' options={cOptions00} onChange={csetCode}/> 
          }
          {oiselect === "01" &&
            <Select placeholder='----------' options={cOptions01} onChange={csetCode}/>
          }
          {oiselect === "99" &&
            <Select placeholder='----------' options={cOptions99} onChange={csetCode}/>
          }
        
        <Button onClick={setList}>Search</Button>
        </Menu>
        </Stack>
    
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 3 }}
        >
        </Stack>

        {menu === 1 &&
          <FlightReservationList />
        }
        {menu === 2 &&
          <RoomReservationList />
        }
        {menu === 3 &&
          <TodoList />
        }
       
      </Container>
    </Page>
  );
}

