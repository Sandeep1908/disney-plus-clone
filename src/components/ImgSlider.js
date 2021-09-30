import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };
    return (
        <Caresoul  {...settings}>
            <Wrap>
                <img src="../images/pic1.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="../images/pic2jpg.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="../images/pic3.jpeg" alt="" />
            </Wrap>
            <Wrap>
                <img src="../images/pic4.jpg" alt="" />
            </Wrap>
        </Caresoul>
    )
}

export default ImgSlider

const Caresoul=styled(Slider)`
    margin-top:10px;

    ul li button{
        &:before{
            font-size:10px;
            color:white;
        }
    
    }
    

    button{
        z-index:1;
    }
   

    .slick-list{
        overflow:visible;
    }

    li.slick-active button{
        &:before{
            color:white;
        }
    }
    }
`
const Wrap=styled(Slider)`
    
    img{
        border:4px solid transparent;
        border-radius:10px;
        height:50vh;
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition:300ms;
    
        &:hover{
            border:4px solid rgba(249,249,249,0.8);
        }
    }

`