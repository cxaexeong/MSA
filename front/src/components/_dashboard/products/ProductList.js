import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';
import RoomReserveStore from '../../../store/RoomReserveStore';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList() {
  const roomReserveStore = RoomReserveStore;

  return (
    <Grid container spacing={3} >
      {roomReserveStore.rooms.map((room) => (
        <Grid key={room.id} item xs={12} sm={6} md={3}>
          <ShopProductCard room={room}  />
        </Grid>
        
      ))}
    </Grid>
  );
}

// export default function ProductList() {
//   const roomReserveStore = RoomReserveStore;
//   return (
//     <Grid container spacing={3} {}>
//       {products.map((product) => (
//         <Grid key={product.id} item xs={12} sm={6} md={3}>
//           <ShopProductCard product={product} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
