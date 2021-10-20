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

    todoList(uid) {
        return axios.get(this.URL + 'todolist/'+`${uid}/`)
            .then((response) => response.data);
    }

    todoDetail(id) {
        return axios.get(this.URL+`${id}/`)
            .then((response) => response.data);
    }

    todoCreate(uid,title,contents,start_date,end_date) {
        return axios.post(this.URL + `create/${uid}/` , {user_id:`${uid}`,title:`${title}`,contents:`${contents}`,start_date:`${start_date}`,end_date:`${end_date}`})
            .then((response) => response.data);
    }
    
    todoUpdate(id,uid,title,contents,start_date,end_date) {
        return axios.put(this.URL + `update/${id}/`,  {user_id:`${uid}`,title:`${title}`,contents:`${contents}`,start_date:`${start_date}`,end_date:`${end_date}`})
            .then((response) => response.data);
    }
    
    todoDelete(id) {
        return axios.delete(this.URL+`delete/${id}/`)
            .then((response) => response.data);
    }

}
export default new MypageApi();