import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/Login/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth)
  if(loading){
    return (
      <AppLoading>
        <AppLoadingContainer>
        <img src='https://yt3.googleusercontent.com/ytc/AL5GRJUyNSclWVdzjF267_EFUDHth4IXcUlcQCjEfNTvSw=s900-c-k-c0x00ffffff-no-rj' aly=''/>
        <Spinner name="ball-spin-fade-loader"
        color="purple"
        fadeIn='none'
        />
        </AppLoadingContainer>
      </AppLoading>
    )
  }
  return (
    <div className="app">

      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}

      </Router>
    </div>
  );
}


export default App;

const AppLoading =styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContainer =styled.div`
text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

>img{
height: 100px;
padding: 20px;
margin-bottom: 40px;

}
`;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;
