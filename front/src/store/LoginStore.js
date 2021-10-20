import {makeAutoObservable} from "mobx";
// import {makeObservable, observable, action } from "mobx";
import { Link as  useNavigate, Navigate } from 'react-router-dom';


class LoginStore{
    username = '';
    token = '';
    isAuthenticated=false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setUser(user){
        this.username = user.username;
    }
    
    setToken(token){
        this.token = token;
    }

    setIsAuthenticated(bool){
        this.isAuthenticated = bool;
    }

    userHasAuthenticated(authenticated) { 
        this.authenticated = (authenticated)
        console.log("*****");
        localStorage.setItem('token',this.token);
        console.log(localStorage.getItem('token'));
        
      }//회원가입이나 로그인이 성공했을 때 토큰을 저장

      handleLogout(){
        this.authenticated = false
        this.username = "";
        console.log("*ddd***");

        console.log(localStorage.getItem('token'));

        localStorage.removeItem('token');
    }//로그아웃
}
export default new LoginStore();