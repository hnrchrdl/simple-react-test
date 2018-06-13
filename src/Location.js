import React from 'react';
import styled from 'styled-components';

const Locations = ({ locations }) => (
  <Location>
    {locations && locations.map(item => item.city).join(', ')}
  </Location>
);

const Location = styled.div`
  display: inline-block;
  margin: 0 0 0 15px;
  color: #888;
`;
export default Locations;
