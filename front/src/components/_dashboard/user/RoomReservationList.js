import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import RoomReservationCard from './RoomReservationCard';
import RoomReserveStore from '../../../store/RoomReserveStore';
import RoomModal from './RoomModal';
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
      {roomReserveStore.rooms.map((room) => (
        <Grid key={room.id} item xs={12} sm={6} md={3}>
          <RoomReservationCard room={room}  />
        </Grid>
      ))}
    </Grid>
    <RoomModal/>
    </div>
  );
}
export default observer(RoomReservationList);
