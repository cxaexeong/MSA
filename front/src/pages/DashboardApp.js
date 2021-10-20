// material
import {Container } from '@mui/material';
// components
import Page from '../components/Page';
import {  MainVectorMap } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <MainVectorMap />
      </Container>
    </Page>
  );
}
