// material
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import ProductStore from '../../../store/ProductStore';
import { observer } from 'mobx-react';
 // ----------------------------------------------------------------------

function ProductList() {
  const productStore = ProductStore;
  return (
   <Grid container spacing={3} >
      {productStore.products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
 

  );
}
export default observer(ProductList);
