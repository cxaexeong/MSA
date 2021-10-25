import {makeAutoObservable, runInAction } from "mobx";
// import {makeObservable, observable, action } from "mobx";
import mypageApi from "../api/MypageApi";
import ANHApi from "../api/ANHApi";
import loginStore from "./LoginStore";
import productStore from "./ProductStore";

class RoomReserveStore{
  room = {};
  // filterlists = {};
  rooms = [];
  allRooms = [];
  modalOpen = false;
  // name =""
  // location = "";
  // imgUrl = "";
  // rating = 0;
  // reviews =  0;
  // price = "";
  // start_date = "";
  // end_date = "";
  oiCode="";
  cCode="";

  constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
      // this.selectRoomReservation('99','99');
      // this.selectAllH();

      // this.filterlists = this.lists;
    }

  // 로그인 구현끝나면 파라미터로 id 받아와야함
  // async selectAll(){
  //   try {
  //     const results = await mypageApi.roomReserveList(1,'99','99');
  //     runInAction(() => this.rooms = results);
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  async deleteRoomReservation(){
    try {
      await mypageApi.roomReserveDelete(localStorage.id, this.room.id);
      this.rooms = this.rooms.filter(room => room.id !== this.room.id);
    } catch(error) {
      console.log(error);
    } 
  }

  // async selectAllH(){
  //   try {
  //     const results = await ANHApi.houseList('99','99');
  //     runInAction(() => this.allRooms = results);
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  // async detailHouse(uid, oi, c){
  //   try {
  //     const results = await ANHApi.houseDetail(uid, oi, c);
  //     runInAction(() => this.room = results);
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  async reserveHouse(rid){
    try {
      await ANHApi.houseReserve(rid, localStorage.id, this.oiCode, this.cCode);
    } catch(error) {
      console.log(error);
    }
  }

  // 로그인 구현끝나면 파라미터로 id 받아와야함
  async selectRoomReservation(oi,c){
    try {
      console.log(loginStore.id)
      const results = await mypageApi.roomReserveList(localStorage.id,oi,c);
      runInAction(() => this.rooms = results);
      // console.log(this.rooms);
    } catch(error) {
      console.log(error);
    }
  }

    async selectRoomList(oi,c,s){
      try {
        const results = await ANHApi.houseList(oi,c,productStore.startDate,productStore.endDate,s);
        runInAction(() => this.allRooms = results);
        console.log(this.allRooms);
      } catch(error) {
        console.log(error);
      }
    }
  

  setRoom(room){
    this.room = room;
    // console.log("######");

    // console.log(this.room.id);
  }

  // setHouse(room){
  //   this.room = room;
  //   this.name = room.name;
  //   this.location = room.location;
  //   this.imgUrl = room.imgUrl;
  //   this.rating = room.rating;
  //   this.reviews =  room.reviews;
  //   this.price = room.price;
  //   this.start_date = room.start_date;
  //   this.end_date = room.end_date;
  // }

  setModalOpen(isOpen){
    this.modalOpen = isOpen;
  }

  setCode(oi, c){
    this.oiCode = oi;
    this.cCode=c;
  }

}

export default new RoomReserveStore();