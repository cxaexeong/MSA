import {makeAutoObservable, runInAction } from "mobx";
// import {makeObservable, observable, action } from "mobx";
import mypageApi from "../api/MypageApi";
import moment from 'moment';

class TodoStore{
  todos = {};
  todo = [];
  modalOpen = false;
  title="";
  contents="";
  start_date="";
  end_date="";
  selectedStartDate = "";
  selectedEndDate = "";
  d = new Date();

  constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
      // this.selectAll();
      this.start_date = this.d.getFullYear()+"-"+(this.d.getMonth()+1)+"-"+this.d.getDate() ;
    }

  // 로그인 구현끝나면 파라미터로 id 받아와야함
  async selectAll(){
    try {
      const results = await mypageApi.todoList(localStorage.id);
      runInAction(() => this.todos = results);
      // console.log(this.todos);
    } catch(error) {
      console.log(error);
    }
  }

  async todoCreate() {
    try {
        await mypageApi.todoCreate(localStorage.id,this.title,this.contents,this.start_date,this.end_date);
        this.selectAll();
    } catch (error) {
        console.log(error)
        runInAction(this.message = error.message);
    }
    this.init();
  }

  async todoUpdate() {
    try {
        await mypageApi.todoUpdate(this.todo.id, localStorage.id,this.title,this.contents,this.start_date,this.end_date);
        this.modalOpen = false;
        this.selectAll();
    } catch (error) {
        console.log(error)
        runInAction(this.message = error.message);
    }
    // this.init();
}

  async deleteTodo(){
    try {
      console.log(this.todo.id);

      await mypageApi.todoDelete(this.todo.id);
      this.todos = this.todos.filter(todo => todo.id !== this.todo.id);
      // console.log("###");
    } catch(error) {
      console.log(error);
    }
  }

  init() {
    this.title = "";
    this.contents = "";
    this.start_date = this.d.getFullYear()+"-"+(this.d.getMonth()+1)+"-"+this.d.getDate() ;
    this.end_date = "";
  }

  setTodo(todo){
    this.todo = todo;
    this.title = todo.title;
    this.contents = todo.contents;
    this.start_date = todo.start_date ;
    this.end_date = todo.end_date;
    this.selectedStartDate = moment(todo.start_date).toDate()
    this.selectedEndDate = moment(todo.end_date).toDate()
  }

  setSelectedStartDate(sd){
    this.selectedStartDate = sd;
  }

  setSelectedEndDate(ed){
    this.selectedEndDate = ed;
  }

  setModalOpen(isOpen){
    this.modalOpen = isOpen;
  }

  setTitle(title){
    this.title = title;
  }
  setContents(contents){
    this.contents = contents;
  }
  setStartDate(start){
    this.start_date = start.getFullYear()+"-"+(start.getMonth()+1)+"-"+start.getDate() ;
  }
  setEndDate(end){
    this.end_date = end.getFullYear()+"-"+(end.getMonth()+1)+"-"+end.getDate() ;
  }
}

export default new TodoStore();