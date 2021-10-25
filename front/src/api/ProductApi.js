import axios from 'axios';

class ProductApi{
    URL = '/localstatus/';
    localstatusList(oi){
        return axios.get(this.URL+`${oi}/`)
            .then((response) => response.data);
    }

}
export default new ProductApi();