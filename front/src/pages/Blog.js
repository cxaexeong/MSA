// material
import { Container, Stack, Button} from '@mui/material';
import { Menu, Select, } from 'semantic-ui-react'
// components
import Page from '../components/Page';
import RoomReserveStore from '../store/RoomReserveStore';
import FlightReserveStore from '../store/FlightReserveStore';
import { useState } from 'react';
import SelectOptions from '../store/SelectOptions';
import { AirportReservationList, HouseReservationList } from '../components/_dashboard/reservation';
// import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/reservation';


// ----------------------------------------------------------------------

export default function Reservation() {
  const [menu, setMenu] = useState(1);
  const [oiselect, oisetSelect] = useState(99);
  const [cselect, csetSelect] = useState(99);

  const rs = RoomReserveStore;
  const fs = FlightReserveStore;
  const oiOptions = SelectOptions.oiOptions;
  const cOptions00 = SelectOptions.cOptions00;
  const cOptions01 = SelectOptions.cOptions01;
  const cOptions99 = SelectOptions.cOptions99;

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
    if(menu === 1){
      fs.selectFlightList(oiselect, cselect);
      fs.setCode(oiselect, cselect);
    }
    else if(menu === 2){
      rs.selectRoomList(oiselect, cselect);
      fs.setCode(oiselect, cselect);
    }
    // else if(menu === 3){
    //   // schedule list filtering
    // } 유즈이펙트구현
  };

  return (
    // title:tab에 적힐 메세지
    <Page title="항공 숙소 예약"> 
      <Container>
      
        <Stack>         
        <Menu compact>
        <Menu.Item onClick={()=>setMenu(1)}
          name='Airport'
        >항공
        </Menu.Item>
        <Menu.Item onClick={()=>setMenu(2)}
          name='Room'
        >숙소
        </Menu.Item>
        {/* <Menu.Item onClick={()=>setMenu(3)}
          name='Schedule'
        >Schedule
        </Menu.Item> */}
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
          <AirportReservationList />
        }
        {menu === 2 &&
          <HouseReservationList />
        }
      </Container>
    </Page>
  );
}

