import axios from 'axios';

class ProductApi{
    URL = '/localstatus/';
    //127.0.0.1:8000/api/product
    // localstatus_list(name){
    //     return axios.get(this.URL + `${name}`)
    //         .then((response) => response.data);
    // }

    localstatusList(oi){
        return axios.get(this.URL+`${oi}/`)
            .then((response) => response.data);
    }

    localstatusDetail(id){
        return axios.get(this.URL+`detail/`+`${id}/`)
            .then((response) => response.data);
    }


}
export default new ProductApi();