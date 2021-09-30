import React,{useEffect} from "react";
import styled from "styled-components";
import { selectUserName ,selectUserPhoto} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { userSignIn, userSignOut } from "../features/user/userSlice";
import {auth,provider} from '../firebase';
import { signInWithPopup } from "firebase/auth";
function Header() {
  const dispatch=useDispatch();
  const username = useSelector(selectUserName);
  const photo=useSelector(selectUserPhoto);
 

  useEffect(()=>{
    auth.onAuthStateChanged(async user=>{
      if(user){
      dispatch(userSignIn({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL
        
      }))
    }
    })
  },[]);

  const signInuser=()=>{
    try{
    signInWithPopup(auth,provider).then(res=>{
      dispatch(userSignIn({
        name:res.user.displayName,
        email:res.user.email,
        photo:res.user.photoURL
      }))
    }).catch(error=>{
      
    })
  }
  catch{
   
  }
  }

  const signOutuser=()=>{
    auth.signOut().then(()=>{
      dispatch(userSignOut())
    })
    
  }

  return (
    <Nav>
      <Logo src="../images/logo.svg" />
      {!username ? (
        <LoginContainer>
          <Login onClick={signInuser}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="#">
              <img src="../images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>

            <a href="#">
              <img src="../images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>

            <a href="#">
              <img src="../images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>

            <a href="#">
              <img src="../images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>

            <a href="#">
              <img src="../images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>

            <a href="#">
              <img src="../images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <RightImg onClick={signOutuser} src={photo} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: black;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 55px;
  margin-left: 20px;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 50px;

  a {
    display: flex;
    align-items: center;
    padding: 0 20px;

    img {
      width: 20px;
    }
    span {
      font-size: 12px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: "";
        background: white;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform: scaleX(0.6);
        transition: all 0.3s;
        opacity: 0;
      }
      &:hover:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const RightImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 20px;
`;
const Login = styled.div`
  border: 2px solid white;
  padding: 10px 16px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.9);
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: rgb(249, 249, 249);
    color: black;
    border: transparent;
  }
`;
