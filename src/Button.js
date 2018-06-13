import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, ...props }) => (
  <ButtonEl onClick={onClick} {...props}>
    {children}
  </ButtonEl>
);

const ButtonEl = styled.div`
  background: ${props => (props.transparent ? 'none' : '#555')};
  color: ${props => (props.transparent ? 'coral' : '#fff')};
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${props => (props.transparent ? 'coral' : '#777')}
  border-radius: 4px;
  &:hover {
    background: ${props => (props.transparent ? 'coral' : '#777')};
    color: #fff;
  }
`;

export default Button;
