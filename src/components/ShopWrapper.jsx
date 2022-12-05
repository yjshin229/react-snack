import React from 'react'
import styled from 'styled-components';
import Options from './Options';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 3rem;

`

function ShopWrapper() {
  return (
   <Container>
    <Options/>
    <Options/>
   </Container>
  )
}

export default ShopWrapper