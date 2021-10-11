import {makeAutoObservable, runInAction } from "mobx";
// import {makeObservable, observable, action } from "mobx";
import roomApi from "../api/RoomApi";

class RoomReserveStore{
  room = {};
  rooms = [];
  modalOpen = false;
  name =""
  location = "";
  imgUrl = "";

  constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
      this.selectAll();
    }

  async selectAll(){
    try {
      const results = await roomApi.roomReserveList(1);
      runInAction(() => this.rooms = results);
      // console.log("###");
    } catch(error) {
      console.log(error);
    }
  }

  async deleteRoomReservation(){
    try {
      await roomApi.roomReserveDelete(this.room.id);
      this.selectAll();
      // console.log("###");
    } catch(error) {
      console.log(error);
    }
  }

  setRoom(room){
    this.room = room;
    this.name = this.room.room_id.name;
    this.location = this.room.room_id.location;
    this.imgUrl = this.room.room_id.imgUrl;
    
    // console.log(this.room.room_id.name);
  }

  setModalOpen(isOpen){
    this.modalOpen = isOpen;
  }


}

export default new RoomReserveStore();