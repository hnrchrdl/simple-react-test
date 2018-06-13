import React from 'react';
import Job from './Job';
import styled from 'styled-components';

const JobListContainer = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: left;
`;
const LoadMore = styled.div`
  background: #333;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background: #555;
  }
`;

const JobList = ({ jobs, loadMore }) => {
  return (
    <JobListContainer>
      {jobs.map(job => <Job key={job.itemId} job={job} />)}
      <LoadMore onClick={loadMore}> mehr... </LoadMore>
    </JobListContainer>
  );
};

export default JobList;
