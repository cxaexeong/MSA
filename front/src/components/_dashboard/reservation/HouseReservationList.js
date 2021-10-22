import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import HouseReservationCard from './HouseReservationCard';
import RoomReserveStore from '../../../store/RoomReserveStore';
import HouseModal from './HouseModal';
import { observer } from 'mobx-react';
// ----------------------------------------------------------------------

// ProductList.propTypes = {
//   products: PropTypes.array.isRequired
// };

function RoomReservationList() {
  const roomReserveStore = RoomReserveStore;
  // console.log(roomReserveStore.rooms);

  return (
    <div>
    <Grid container spacing={3} >
      {roomReserveStore.allRooms.map((room) => (
        <Grid key={room.id} item xs={12} sm={6} md={3}>
          <HouseReservationCard room={room}  />
        </Grid>
      ))}
    </Grid>
    <HouseModal/>
    </div>
  );
}
export default observer(RoomReservationList);
