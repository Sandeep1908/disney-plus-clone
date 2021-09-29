import React from 'react'
import styled from 'styled-components'
import {selectMovie} from '../features/movieSlice/movie'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
function Movies() {
    const movie=useSelector(selectMovie)
    return (
        <Container>
            <h2>Recommended for You</h2>
            <Content>
                {movie &&
                 movie.map(curr=>{
                return <Link to={`/detail:${curr.id}`} key={curr.id}> 
                        <Wrap>
                            <img src={curr.backgroundImg} alt="" />
                        </Wrap>
                         </Link>
                  
                }) 
                }
               
               
            </Content>
        </Container>
    )
}

export default Movies

const Container=styled.div`

`
const Content=styled.div`
padding:15px 0 15px;
display:grid;
grid-gap:25px;
grid-template-columns:repeat(5,minmax(0,1fr));
`
const Wrap=styled.div`
    border:3px solid rgba(249,249,249,.1);
    width:300px;
    height:200px;
    border-radius:10px;
    overflow:hidden;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition:all 250ms;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        transform:scale(1.01);
        border:4px solid rgba(249,249,249,.8);

    }
`