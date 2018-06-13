import React from 'react';
import Job from './Job';
import styled from 'styled-components';

const JobListContainer = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: left;
`;

const JobList = ({ jobs }) => {
  return (
    <JobListContainer>
      {jobs.map(job => <Job key={job.itemId} job={job} />)}
    </JobListContainer>
  );
};

export default JobList;
