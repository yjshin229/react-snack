import React from 'react'
import styled from 'styled-components';
import Option from './Options'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem ;

`
function ShopWrapper() {
  return (
   <Container>
      <Option name = {'디저트'}/>
      <Option name = {'음료'}/>
   </Container>
  )
}

export default ShopWrapper