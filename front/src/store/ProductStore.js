import {makeAutoObservable, runInAction } from "mobx";
import ProductApi from "../api/ProductApi";


class ProductStore{
    product = {};
    products = [];
    oiCode="";
    p ={};
    startDate = "";
    endDate = "";

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        // this.selectAll();
    }

    async selectAll(oi) {
        try {
            const results = await ProductApi.localstatusList(oi);
            runInAction(() => this.products = results);
        } catch (error) {
            console.log(error);
        }
    }

    setProduct(product) {
        this.product = product;
        this.p = product.product_id;
    }
    
    // async setList(id){
    //     try {
    //       const results = await ProductApi.localstatusDetail(id);
    //       runInAction(() => this.lists = results);
    //       this.name = this.lists.product_id.name;
    //       this.stage = this.lists.stage;
    //       this.comment = this.lists.comment;
    //     } catch(error) {
    //       console.log(error);
    //     }
    //   }

    //   지도에서 선택한 나라 정보출력 함수 다시 만들어야함
    //   async setList(id){
    //     try {
    //       const results = await ProductApi.localstatusDetail(id);
    //       runInAction(() => this.lists = results);
    //       this.name = this.lists.product_id.name;
    //       this.stage = this.lists.stage;
    //       this.comment = this.lists.comment;
    //     } catch(error) {
    //       console.log(error);
    //     }
    //   }
    setCode(oi){
        this.oiCode = oi;
      }

    setDate(sd, ed){
        console.log("#####");

        this.startDate = sd.getFullYear()+"-"+(sd.getMonth()+1)+"-"+sd.getDate()
        // this.startDate = (sd.getFullYear()).toString()+(sd.getMonth()+1).toString()+sd.getDate().toString();
        this.endDate= ed.getFullYear()+"-"+(ed.getMonth()+1)+"-"+ed.getDate();
        // this.endDate= ed.getFullYear().toString()+(ed.getMonth()+1).toString()+ed.getDate().toString();
        console.log(this.startDate,this.endDate);
    }
}
export default new ProductStore();