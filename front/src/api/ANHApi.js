import axios from 'axios';

class ANHApi{
    URL = '/vp/';

    airportList(oi,c,s,e) {
        return axios.get(this.URL+`airport/`+`${oi}/`+`${c}/`+`${s}/`+`${e}/`)
            .then((response) => response.data);
    }

    airportReserve(fid, uid, oi, c) {
        return axios.post(this.URL+`airreservation/`,  {flight_id:`${fid}`,user_id:`${uid}`,oi_code:`${oi}`,c_code:`${c}`})
            .then((response) => response.data);
    }

    houseList(oi,c,s,e) {
        return axios.get(this.URL+`house/`+`${oi}/`+`${c}/`+`${s}/`+`${e}/`)
            .then((response) => response.data);
    }

    houseReserve(rid, uid, oi,c) {
        return axios.post(this.URL+`housereservation/`,  {room_id:`${rid}`,user_id:`${uid}`,oi_code:`${oi}`,c_code:`${c}`})
            .then((response) => response.data);
    }


}
export default new ANHApi();