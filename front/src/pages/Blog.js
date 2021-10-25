// material
import { Container, Stack, Button} from '@mui/material';
import { Menu, Select, } from 'semantic-ui-react'
// components
import Page from '../components/Page';
import RoomReserveStore from '../store/RoomReserveStore';
import FlightReserveStore from '../store/FlightReserveStore';
import ProductStore from '../store/ProductStore';
import { useState,useEffect } from 'react';
import SelectOptions from '../store/SelectOptions';
import { AirportReservationList, HouseReservationList } from '../components/_dashboard/reservation';
// import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/reservation';
import { Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

// ----------------------------------------------------------------------

export default function Reservation() {
  const [menu, setMenu] = useState(1);
  const [oiselect, oisetSelect] = useState(99);
  const [cselect, csetSelect] = useState(99);
  const [fsort, fsortSelect] = useState(9);
  const [rsort, rsortSelect] = useState(9);
  const [startDate, setStartDate] = useState(moment(ProductStore.startDate).toDate());
  const [endDate, setEndDate] = useState(moment(ProductStore.endDate).toDate());

  const rs = RoomReserveStore;
  const fs = FlightReserveStore;
  const ps = ProductStore;
  const oiOptions = SelectOptions.oiOptions;
  const cOptions00 = SelectOptions.cOptions00;
  const cOptions01 = SelectOptions.cOptions01;
  const cOptions99 = SelectOptions.cOptions99;
  const sortFlightOptions = SelectOptions.sortFlightOptions;
  const sortRoomOptions = SelectOptions.sortRoomOptions;

  useEffect(() => {
    rs.selectRoomList('99', '99','9');
    fs.selectFlightList('99', '99','9');
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
  const setFsortCode = (e, {value}) => {
    // e.persist();
    console.log(value);
    fsortSelect(value);
  };
  const setRsortCode = (e, {value}) => {
    // e.persist();
    rsortSelect(value);
  };

  const setList = () => {
    if(menu === 1){
      fs.selectFlightList(oiselect, cselect, fsort);
      fs.setCode(oiselect, cselect);
    }
    else if(menu === 2){
      rs.selectRoomList(oiselect, cselect, rsort);
      rs.setCode(oiselect, cselect);
    }
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
        {menu===1 &&
            <Select placeholder='----------' options={sortFlightOptions} onChange={setFsortCode}/>
          }
          {menu===2 &&
            <Select placeholder='----------' options={sortRoomOptions} onChange={setRsortCode}/>
          }
        <Button onClick={setList}>Sort</Button>

        </Menu>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 1 }}
        >
        </Stack>
        <Stack>         
        
      
        <Form>
            <Form.Group >
              <Form.Field>
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
      <Button onClick={()=>{ps.setDate(startDate,endDate); setList()}}>날짜변경</Button>
            </Form.Group>  
      </Form>
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

