import React from 'react'
import styled from "styled-components";
import { Button } from '../styled/Button';
const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src='/dices.png' />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Startgame;

const Container = styled.div`
max-width:1180px;
height: 100vh;
display: flex;
margin: 0 auto;

.content h1{
  font-size: 96px;
  white-space: nowrap;

}

`;

