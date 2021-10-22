import PropTypes from 'prop-types';
// material
import { Grid, List, ListItem } from '@mui/material';
import FlightReservationCard from './FlightReservationCard';
import FlightReserveStore from '../../../store/FlightReserveStore';
import FlightModal from './FlightModal';
import { observer } from 'mobx-react';
import styled, {css} from 'styled-components'
import 'semantic-ui-css/semantic.min.css';

const ModalLocation = styled.div`
  margin: 100px;
  ${props=>{
  	return props.check ? 'background-color: black !important;' : 'background-color:white'
  }}`;
// ----------------------------------------------------------------------

// ProductList.propTypes = {
//   products: PropTypes.array.isRequired
// };

function FlightReservationList() {
  // useEffect로 componentdidmount 안에서 
  // store에 하면 다른메뉴에서도 불러서 error
  // 
  const flightReserveStore = FlightReserveStore;
  // console.log(roomReserveStore.rooms);

  return (
    <div>
     <Grid container spacing={3} >
      {flightReserveStore.flights.map((flight) => (
        <Grid key={flight.id} item xs={12}>
          <FlightReservationCard flight={flight}  />
        </Grid>
      ))}
    </Grid> 
    <FlightModal/>
    </div>
  );
}

export default observer(FlightReservationList);