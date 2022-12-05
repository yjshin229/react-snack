import React from 'react';
import styled from 'styled-components';

export const MainButton = styled.button`
    background-color: var(--button-pink);
    border-radius: 6px;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    color: black;
    font-weight: bold;
    align-self: center;
    cursor: pointer;
    font-family: CBNUJIKJI;

    &:hover {
      background-color: var(--sub-pink);
    }
`

export const LightButton = () => {
  return (
    <MainButton></MainButton>
  )
}

