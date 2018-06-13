import React from 'react';
import styled from 'styled-components';
import { isNewJob } from './lib';
import Button from './Button';

const Job = ({ job }) => {
  return (
    job && (
      <JobContainer>
        {job.tsCreated &&
          isNewJob(job.tsCreated) && <IndicateNew>*</IndicateNew>}
        <Company>{job.company}</Company>
        <Location>
          {job.locations && job.locations.map(item => item.city).join(', ')}
        </Location>
        <Title>{job.title}</Title>
        {job.tags &&
          job.tags.benefits && (
            <BenefitsContainer>
              {job.tags.benefits.map(benefit => (
                <Benefit key={benefit.key}>{benefit.translation}</Benefit>
              ))}
            </BenefitsContainer>
          )}
        <Details>
          <Button transparent={true}>zum Job</Button>
        </Details>
      </JobContainer>
    )
  );
};

const IndicateNew = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  background: coral;
  border-radius: 50%;
`;
const JobContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  position: relative;
`;
const Title = styled.div`
  margin: 20px 0 0;
  font-size: 1.3em;
`;
const Company = styled.div`
  display: inline-block;
`;
const Location = styled.div`
  display: inline-block;
  margin: 0 0 0 15px;
  color: #888;
`;
const BenefitsContainer = styled.div`
  margin: 20px 0 0;
`;
const Benefit = styled.span`
  background-color: #eee;
  padding: 5px;
  margin: 0 10px 0 0;
  border-radius: 5px;
`;
const Details = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default Job;
