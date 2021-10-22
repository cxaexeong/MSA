import {makeAutoObservable, runInAction } from "mobx";
import ProductApi from "../api/ProductApi";


class ProductStore{
    list = {};
    lists = [];
    name = "";
    stage = "";
    id = "";
    comment = "";
    product_id = "";
    imgUrl = "";
    date = "";

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.selectAll();
    }

    async selectAll() {
        try {
            const results = await ProductApi.localstatusList();
            runInAction(() => this.lists = results);
            // console.log(this.lists);
        } catch (error) {
            console.log(error);
        }
    }

    setProduct(comment, stage) {
        this.comment = comment;
        this.stage = stage;
    }
    
    async setList(id){
        try {
          const results = await ProductApi.localstatusDetail(id);
          runInAction(() => this.lists = results);
          this.name = this.lists.product_id.name;
          this.stage = this.lists.stage;
          this.comment = this.lists.comment;
        } catch(error) {
          console.log(error);
        }
      }

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


}
export default new ProductStore();