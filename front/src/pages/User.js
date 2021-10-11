import { useEffect, useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  RoomReservationList
} from '../components/_dashboard/user';
import RoomReserveStore from '../store/RoomReserveStore';

// ----------------------------------------------------------------------

export default function RoomReservation() {
  const roomReserveStore = RoomReserveStore;
  // const [roomReserveStore, setroomReserveStore]
  // roomReserveStore.selectAll();
  // console.log("@@");

  // ,[] 하면 class에서 componentDidMount()랑 같음
  useEffect(()=>{
    // roomReserveStore.selectAll();
  }, [roomReserveStore.rooms]);


  return (
    // title:tab에 적힐 메세지
    <Page title="Dashboard: Products | Minimal-UI"> 
      <Container>
        {/* 분류/페이지 타이틀 */}
        <Typography variant="h4" sx={{ mb: 5 }}>
          Room
        </Typography>

      {/* filters & sort by 부분 아래만*/}
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 3 }}
        >
          {/* 위아래둘다 */}
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1}}>
            {/* filters  클릭하면*/}
          {/* <ProductFilterSidebar
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            /> */}
            {/* sort by 클릭하면 */}
            {/* <ProductSort /> */}
          </Stack>
        </Stack>

        {/* mobx써서 파라미터안넘겨도됨  */}
        {/* <ProductList products={PRODUCTS} /> */}
        <RoomReservationList/>
        {/* 오른쪽 장바구니 */}
        {/* <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}

