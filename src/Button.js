import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick }) => (
  <ButtonEl onClick={onClick}>{children}</ButtonEl>
);

const ButtonEl = styled.div`
  background: ${props => (props.transparent ? 'none' : '#555')};
  color: ${props => (props.transparent ? 'coral' : '#fff')};
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: ${props => (props.transparent ? 'coral' : '#777')};
  }
`;

export default Button;
