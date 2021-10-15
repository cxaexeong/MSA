import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import FlightReservationCard from './FlightReservationCard';
import FlightReserveStore from '../../../store/FlightReserveStore';
import FlightModal from './FlightModal';
import { observer } from 'mobx-react';
// ----------------------------------------------------------------------

// ProductList.propTypes = {
//   products: PropTypes.array.isRequired
// };

function FlightReservationList() {
  const flightReserveStore = FlightReserveStore;
  // console.log(roomReserveStore.rooms);

  return (
    <div>
    <Grid container spacing={3} >
      {flightReserveStore.flights.map((flight) => (
        <Grid key={flight.id} item xs={12} sm={6} md={3}>
          <FlightReservationCard flight={flight}  />
        </Grid>
      ))}
    </Grid>
    <FlightModal/>
    </div>
  );
}

export default observer(FlightReservationList);
