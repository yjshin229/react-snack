import React from 'react';
import styled from 'styled-components';

const StyledMainButton = styled.button`
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

const StyledEditButton = styled.button`
    background-color: transparent;
    border-radius: 6px;
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    color: black;
    align-self: center;
    cursor: pointer;
    border-color: var(--main-pink);
    margin-left: 0.5rem;
    font-size: 0.8rem;
    &:hover {
      background-color: var(--main-pink);
      color: white;
      border-color: var(--grey);
    }
`

export const MainButton = ({text, size}) => {
  return (
    <StyledMainButton style={{fontSize : size}}>{text}</StyledMainButton>
  )
}

export const EditButton = ({icon}) => {
  return (
    <StyledEditButton>{icon}</StyledEditButton>
  )
}

