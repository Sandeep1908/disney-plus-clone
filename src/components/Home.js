import React,{useEffect} from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import {onSnapshot,collection} from 'firebase/firestore'
import {setMovie} from '../features/movieSlice/movie'
import {useDispatch} from 'react-redux';



function Home() {
    const dispatch=useDispatch();
    useEffect(()=>{
        onSnapshot(collection(db,'movies'),(snap)=>{
            const temp=snap.docs.map((doc)=>{
                return{id:doc.id,...doc.data()}
            })
            dispatch(setMovie(temp))
        })
    },[])
       
    return (
        <Container>
           <ImgSlider/>
           <Viewers/>
           <Movies/>
        </Container>
    )
}

export default Home

const Container=styled.main`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.4vw + 5px);
    position:relative;
    overflow-x:hidden;

    &:before{
        content:"";
        background:url('../images/home-background.png') center center/cover no-repeat fixed;
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        z-index:-1;       
    }
    
`
