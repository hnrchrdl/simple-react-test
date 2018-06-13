import React from 'react';
import styled from 'styled-components';

const CompanyName = ({ name }) => <Company>{name}</Company>;

const Company = styled.div`
  display: inline-block;
`;
export default CompanyName;
