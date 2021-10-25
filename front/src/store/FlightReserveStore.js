import {makeAutoObservable, runInAction } from "mobx";
// import {makeObservable, observable, action } from "mobx";
import mypageApi from "../api/MypageApi";
import ANHApi from "../api/ANHApi";
import loginStore from "./LoginStore";
import productStore from "./ProductStore";

class FlightReserveStore{
  flight = {};
  flights = [];
  allFlights = [];
  modalOpen = false;
  // depart_airline = "";
  // depart_dep_airport = "";
  // depart_dest_airport = "";
  // depart_etd = "";
  // depart_eta = "";
  // depart_et = "";
  // depart_via = "";
  // return_airline = "";
  // return_dep_airport = "";
  // return_dest_airport = "";
  // return_etd = "";
  // return_eta = "";
  // return_et = "";
  // return_via = "";
  // imgUrl1 = "";
  // imgUrl2 = "";
  // price = "";
  oiCode="";
  cCode="";
  sort="";
  constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
      // this.selectFlightReservation('99','99');
      // this.selectAllA();
    }

  // 로그인 구현끝나면 파라미터로 id 받아와야함
  // async selectAll(){
  //   try {
  //     const results = await mypageApi.flightReserveList(1,'99','99');
  //     runInAction(() => this.flights = results);
  //     // console.log(this.flights);
  //     // console.log(loginStore.username);
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  // async selectAllA(){
  //   try {
  //     const results = await ANHApi.airportList('99','99');
  //     runInAction(() => this.allFlights = results);
  //     // console.log(this.allFlights);

  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  async deleteFlightReservation(){
    try {
      await mypageApi.flightReserveDelete(localStorage.id, this.flight.id);
      this.flights = this.flights.filter(flight => flight.id !== this.flight.id);
      // console.log("###");
    } catch(error) {
      console.log(error);
    }
  }

  async reserveAirport(fid){
    try {
      await ANHApi.airportReserve(fid, localStorage.id, this.oiCode, this.cCode);
      // console.log(this.oiCode,this.cCode);
    } catch(error) {
      console.log(error);
    }
  }

  // async detailAirport(id){
  //   try {
  //     const results = await ANHApi.airportDetail(id);
  //     runInAction(() => this.flight = results);
  //     console.log(this.flight);
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  async selectFlightList(oi,c,s){
    try {
      const results = await ANHApi.airportList(oi,c,productStore.startDate,productStore.endDate,s);
      runInAction(() => this.allFlights = results);
    } catch(error) {
      console.log(error);
    }
    // console.log(oi, "###",c);
  }

  // 로그인 구현끝나면 파라미터로 id 받아와야함
  async selectFlightReservation(oi,c){
    try {
      const results = await mypageApi.flightReserveList(localStorage.id,oi,c);
      runInAction(() => this.flights = results);
      // console.log(this.flights);
    } catch(error) {
      console.log(error);
    }
    // console.log(oi, "###",c);
  }

  setFlight(flight){
    this.flight = flight;
    // this.imgUrl1 = flight.flight_id.imgUrl1;
    // this.imgUrl2 = flight.flight_id.imgUrl2;
    // this.depart_airline = flight.flight_id.depart_airline;
    // this.depart_dep_airport = flight.flight_id.depart_dep_airport;
    // this.depart_dest_airport = flight.flight_id.depart_dest_airport;
    // this.depart_etd = flight.flight_id.depart_etd;
    // this.depart_eta = flight.flight_id.depart_eta;
    // this.depart_et = flight.flight_id.depart_et;
    // this.depart_via = flight.flight_id.depart_via;
    // this.return_airline = flight.flight_id.return_airline;
    // this.return_dep_airport = flight.flight_id.return_dep_airport;
    // this.return_dest_airport = flight.flight_id.return_dest_airport;
    // this.return_etd = flight.flight_id.return_etd;
    // this.return_eta = flight.flight_id.return_eta;
    // this.return_et = flight.flight_id.return_et;
    // this.return_via = flight.flight_id.return_via;
    // this.price = flight.flight_id.price;
    


    // console.log(this.room.room_id.name);
  }

  // setAirport(flight){
  //   this.flight = flight;
    // this.imgUrl1 = flight.imgUrl1;
    // this.imgUrl2 = flight.imgUrl2;
    // this.depart_airline = flight.depart_airline;
    // this.depart_dep_airport = flight.depart_dep_airport;
    // this.depart_dest_airport = flight.depart_dest_airport;
    // this.depart_etd = flight.depart_etd;
    // this.depart_eta = flight.depart_eta;
    // this.depart_et = flight.depart_et;
    // this.depart_via = flight.depart_via;
    // this.return_airline = flight.return_airline;
    // this.return_dep_airport = flight.return_dep_airport;
    // this.return_dest_airport = flight.return_dest_airport;
    // this.return_etd = flight.return_etd;
    // this.return_eta = flight.return_eta;
    // this.return_et = flight.return_et;
    // this.return_via = flight.return_via;
    // this.price = flight.price;
    // this.oiCode = flight.oi_code;
    // this.cCode = flight.c_code;
  // }

  setModalOpen(isOpen){
    this.modalOpen = isOpen;
  }

  setCode(oi, c){
    this.oiCode = oi;
    this.cCode=c;
  }

}

export default new FlightReserveStore();