// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import 'semantic-ui-css/semantic.min.css';
// ----------------------------------------------------------------------
import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import LoginForm from './components/authentication/login/LoginForm';
import AccountPopover from './layouts/dashboard/AccountPopover';
import LoginStore from './store/LoginStore';

export default function App() {
  const [modal, setModal] = useState(false);
  const [account, setAccount] = useState([])
  const ls = LoginStore;
  let [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('token') ? true : false)
  
  // const loginStore = LoginStore;

  // const userHasAuthenticated = (authenticated, username, token) => { 
  //   setisAuthenticated(authenticated)
  //   console.log("*****");
  //   setAccount(ls.username)
  //   console.log(ls.token);
  //   // localStorage.setItem('token', ls.token);
  // }//회원가입이나 로그인이 성공했을 때 토큰을 저장

  // const handleLogout = (token) => {
  //     // setisAuthenticated(false)
  //     console.log(localStorage.getItem('token'))
  //     console.log("$$$$$", token)
  //     // setAccount("")
  //     localStorage.removeItem('token');
  //     setModal(false)
  // }//로그아웃
  useEffect(() => {
    // 토큰(access token)이 이미 존재하는 상황이라면 서버에 GET /validate 요청하여 해당 access token이 유효한지 확인
    if (ls.isAuthenticated) {
      // 현재 JWT 토큰 값이 타당한지 GET /validate 요청을 통해 확인하고
      // 상태 코드가 200이라면 현재 GET /user/current 요청을 통해 user정보를 받아옴
      fetch('http://localhost:8000/validate/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        fetch('http://localhost:8000/user/current/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
        .then(res => res.json())
        .then(json => {
          // 현재 유저 정보 받아왔다면, 로그인 상태로 state 업데이트 하고
          if (json.username) {
            console.log(json.username);
            ls.setUser(json.username);
          }else{
            //유저가 undefined라면 로그인버튼이 나오도록 modal을 false로 항상 맞춰줌
            setModal(false)
            ls.setIsAuthenticated(false)
          }
          // Refresh Token 발급 받아 token의 만료 시간 연장
          fetch('http://localhost:8000/refresh/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: localStorage.getItem('token')
            })
          })
          .then(res => res.json())
          .then((json)=>{
            ls.setUser( json.user.username);
            ls.setToken(json.token);
            ls.userHasAuthenticated(true);
          })
          .catch(error => {
            console.log(error);
          });;
        })
        .catch(error => {
          ls.handleLogout();
          console.log(error)
        });
      })
      .catch(error => {
        ls.handleLogout();
        console.log(error)
      });
    }
  },[ls.isAuthenticated])
  //회원가입이나 로그인이 성공했을 때 modal을 변경해 로그인 버튼을 없애고 글쓰기 버튼과 정보버튼을 나오게하는 setModal
  //useEffect의 두번째 인자는 모든 렌더링 후 두번째 인자가 변경될때에만 실행되라는 내용 
  
  useEffect(()=>{
    if(ls.isAuthenticated){
      setModal(true)
    }
    else{
      setModal(false)
    }
  },[ls.isAuthenticated])
  
  
 
  return (
    <>
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router >
      </Router>
    </ThemeConfig>
    </>
  );
}
