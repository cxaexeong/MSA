import {makeAutoObservable, runInAction } from "mobx";
// import {makeObservable, observable, action } from "mobx";
import mypageApi from "../api/MypageApi";

class RoomReserveStore{
  room = {};
  rooms = [];
  modalOpen = false;
  name =""
  location = "";
  imgUrl = "";
  rating = 0;
  reviews =  0;
  price = "";
  start_date = "";
  end_date = "";
  oiCode="";
  cCode="";

  constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
      this.selectAll();
    }

  // 로그인 구현끝나면 파라미터로 id 받아와야함
  async selectAll(){
    try {
      const results = await mypageApi.roomReserveList(1,'99','99');
      runInAction(() => this.rooms = results);
    } catch(error) {
      console.log(error);
    }
  }

  async deleteRoomReservation(){
    try {
      await mypageApi.roomReserveDelete(this.room.id);
      this.rooms = this.rooms.filter(room => room.id !== this.room.id);
    } catch(error) {
      console.log(error);
    }
  }

  // 로그인 구현끝나면 파라미터로 id 받아와야함
  async selectRoomReservation(oi,c){
    try {
      const results = await mypageApi.roomReserveList(1,oi,c);
      runInAction(() => this.rooms = results);
      // console.log(this.rooms);
    } catch(error) {
      console.log(error);
    }
    // console.log(oi, "###",c);
  }

  setRoom(room){
    this.room = room;
    this.name = room.room_id.name;
    this.location = room.room_id.location;
    this.imgUrl = room.room_id.imgUrl;
    this.rating = room.room_id.rating;
    this.reviews =  room.room_id.reviews;
    this.price = room.room_id.price;
    this.start_date = room.room_id.start_date;
    this.end_date = room.room_id.end_date;
    
    // console.log(this.room.room_id.name);
  }

  setModalOpen(isOpen){
    this.modalOpen = isOpen;
  }

  // setOiCode(oi){
  //   this.oiCode = oi;
  // }

  // setModal(c){
  //   this.cCode = c;
  // }
}

export default new RoomReserveStore();