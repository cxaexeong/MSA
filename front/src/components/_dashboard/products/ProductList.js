import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';
import ProductStore from '../../../store/ProductStore';
import { observer } from 'mobx-react';
 // ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};




function ProductList({ products, ...other }) {
  const productStore = ProductStore;
  return (
   <Grid container spacing={3} {...other}>
      {productStore.products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
          
        </Grid>
      ))}
    </Grid>
 

  );
}
export default observer(ProductList);
