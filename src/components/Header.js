import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="../images/logo.svg" />

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
      <RightImg src="https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/239767839_1453744078328368_5411508746167460713_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ao8je37h-ZMAX99y_BU&_nc_ht=scontent.fbho4-2.fna&oh=a3bd941d3ebf146817e7f2e61e7f4c3c&oe=61746E4A" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height:70px;
  background: black;
  display: flex;
  align-items: center;
  overflow-x:hidden;
`;
const Logo = styled.img`
  width: 55px;
`;
const NavMenu = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    margin-left:50px;

    a{
        display:flex;
        align-items:center;
        padding:0 20px;
        
        img{
            width:20px;
        }
        span{
            font-size:12px;
            letter-spacing:1.4px;
            position:relative;

            &:after{
                content:"";
                background:white;
                height:2px;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                transform:scaleX(.6);
                transition:all .3s;
                opacity:0;
               
    
            }
            &:hover:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }

`;
const RightImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-right:20px;
`;
