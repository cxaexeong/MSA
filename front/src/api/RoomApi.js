import axios from 'axios';

class RoomApi{
    URL = '/vp/';
    roomReserveList(uid) {
        return axios.get(this.URL+`${uid}/`)
            .then((response) => response.data);
    }

    roomReserveDelete(id) {
        return axios.delete(this.URL+`roomreservation/delete/${id}/`)
            .then((response) => response.data);
    }

}
export default new RoomApi();