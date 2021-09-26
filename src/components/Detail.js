import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <BackgroundImg>
        <img
          src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg"
          alt=""
        />
      </BackgroundImg>

      <ImgLogo>
        <img
          src="https://see.fontimg.com/api/renderfont4/Rp0Pe/eyJyIjoiZnMiLCJoIjoxMDAsInciOjEyNTAsImZzIjo4MCwiZmdjIjoiI0U0RENEQyIsImJnYyI6IiMzRTNEM0MiLCJ0IjoxfQ/RGlzbmV5IEJhbw/shalma.png"
          alt=""
        />
      </ImgLogo>

      <Content>
        <PlayButton>
            <img src="../images/play-icon-black.png" alt="" />
            <span>PLAY</span>
        </PlayButton>

        <TrailorButton>

        <img src="../images/play-icon-white.png" alt="" />
            <span>Trailor</span>
        </TrailorButton>

        <AddButton>
            <span>+</span>
        </AddButton>

        <GroupButton>
            <img src="../images/group-icon.png" alt="" />
        </GroupButton>
      </Content>
      <Subtitle>
      Animation .English .2018 .U
      </Subtitle>
      <Discription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eaque nemo officiis itaque minus, ullam iste nihil blanditiis enim deserunt expedita, iure non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum rem voluptatum quam voluptate! Mollitia molestias, fuga ad facere officia aspernatur nostrum ea?
      </Discription>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 20px;
  position: relative;
`;
const BackgroundImg = styled.div`
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImgLogo = styled.div`
  width: 30vw;
  min-height: 170px;
  height: 32vh;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
    padding: 20px;
    display:flex;
`;

const PlayButton = styled.button`

        padding:0 12px;
        cursor:pointer;
        margin-right:12px;
        display:flex;
        align-items:center;
        border-radius:4px;
        border:none;
        background:rgba(249,249,249);
        span{
            font-size:12px;
            letter-spacing:6px;
            
        }
        &:hover{
            background:rgba(200,200,200)
        }


`;
const TrailorButton = styled(PlayButton)`
        background:rgba(0,0,0,.4);
        color:white;
        border:2px solid white;
        span{

            text-transform:uppercase;
        }

`;
const AddButton = styled.button`
        width:44px;
        height:44px;
        background:rgba(0,0,0,.3);
        border-radius:50%;
        border:1px solid white;
        cursor:pointer;
        margin-right:12px;
        span{
            font-size:24px;
            color:white;
        }

        &:hover{
            background:rgba(0,0,0,9);
        }
        
        `;
        const GroupButton = styled(AddButton)`
        background:rgba(0,0,0,.9);
        display:flex;
        align-items:center;
        justify-content:center;
        img{
            
        }
        
`;

const Subtitle=styled.div`
    padding:0 20px;
    color:rgB(249,249,249);
    font-size:15px;
    min-height:30px;

`
const Discription=styled.div`
    padding:0 20px;
    color:rgB(249,249,249);
    font-size:20px;
    line-height:1.9;

`
