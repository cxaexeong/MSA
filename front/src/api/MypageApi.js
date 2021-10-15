import axios from 'axios';

class MypageApi{
    URL = '/mypage/';
    
    roomReserveList(uid,oi,c) {
        return axios.get(this.URL+`room/`+`${uid}/`+`${oi}/`+`${c}/`)
            .then((response) => response.data);
    }

    roomReserveDelete(id) {
        return axios.delete(this.URL+`roomdelete/`+`${id}/`)
            .then((response) => response.data);
    }

    flightReserveList(uid,oi,c) {
        return axios.get(this.URL+`flight/`+`${uid}/`+`${oi}/`+`${c}/`)
            .then((response) => response.data);
    }

    flightReserveDelete(id) {
        return axios.delete(this.URL+`flightdelete/`+`${id}/`)
            .then((response) => response.data);
    }

}
export default new MypageApi();