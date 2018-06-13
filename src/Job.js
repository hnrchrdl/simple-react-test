import React from 'react';
import styled from 'styled-components';
import { isNewJob } from './lib';
import Button from './Button';
import CompanyName from './CompanyName';
import Benefits from './Benefits';
import Title from './Title';
import Location from './Location';

const Job = ({ job }) =>
  job && (
    <JobContainer>
      {job.tsCreated && isNewJob(job.tsCreated) && <IndicateNew>*</IndicateNew>}
      {job.company && <CompanyName name={job.company} />}
      {job.locations && <Location locations={job.locations} />}
      {job.title && <Title title={job.title} />}
      {job.tags &&
        job.tags.benefits && <Benefits benefits={job.tags.benefits} />}
      <Details>
        <Button transparent={true}>zum Job</Button>
      </Details>
    </JobContainer>
  );

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

const Details = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default Job;
