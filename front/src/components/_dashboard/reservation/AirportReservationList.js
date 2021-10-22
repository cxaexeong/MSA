// import PropTypes from 'prop-types';
// material
import { Grid, List, ListItem } from '@mui/material';
import AirportReservationCard from './AirportReservationCard';
import FlightReserveStore from '../../../store/FlightReserveStore';
import AirportModal from './AirportModal';
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

function AirportReservationList() {
  const flightReserveStore = FlightReserveStore;
  // console.log(roomReserveStore.rooms);

  return (
    <div>
     <Grid container spacing={3} >
      {flightReserveStore.allFlights.map((flight) => (
        <Grid key={flight.id} item xs={12}>
          <AirportReservationCard flight={flight}  />
        </Grid>
      ))}
    </Grid> 
    <AirportModal/>
    </div>
  );
}

export default observer(AirportReservationList);