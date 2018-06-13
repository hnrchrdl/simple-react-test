import React from 'react';
import styled from 'styled-components';

const IndicateNew = styled.div``;
const JobContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #eee;
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

function isNewJob(date) {
  // if date is new than 10.000h, it is considered new
  return (Date.now() - Date.parse(date)) / 360000 < 10000;
}

const Job = ({ job }) => {
  return (
    job && (
      <JobContainer>
        {job.tsCreated &&
          isNewJob(job.tsCreated) && <IndicateNew>Neu</IndicateNew>}
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
      </JobContainer>
    )
  );
};
export default Job;
