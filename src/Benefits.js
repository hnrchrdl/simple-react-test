import React from 'react';
import styled from 'styled-components';

const Benefits = ({ benefits }) => (
  <BenefitsContainer>
    {benefits &&
      benefits.map(benefit => (
        <Benefit key={benefit.key}>{benefit.translation}</Benefit>
      ))}
  </BenefitsContainer>
);

const BenefitsContainer = styled.div`
  margin: 20px 0 0;
`;
const Benefit = styled.span`
  background-color: #eee;
  padding: 5px;
  margin: 0 10px 0 0;
  border-radius: 5px;
`;

export default Benefits;
