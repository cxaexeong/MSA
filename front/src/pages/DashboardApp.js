// material
import {Container } from '@mui/material';
// components
import Page from '../components/Page';
import {  MainVectorMap } from '../components/_dashboard/app';
import { useEffect } from 'react';
import productStore from '../store/ProductStore';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  useEffect(() => {
    productStore.selectAll('9');
  },[]);
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <MainVectorMap />
      </Container>
    </Page>
  );
}
