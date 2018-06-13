import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => <TitleEl>{title}</TitleEl>;

const TitleEl = styled.div`
  margin: 20px 0 0;
  font-size: 1.3em;
`;
export default Title;
