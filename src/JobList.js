import React from 'react';
import Job from './Job';
import styled from 'styled-components';
import Button from './Button';

const JobList = ({ jobs, loadMore }) => {
  return (
    <JobListContainer>
      {jobs.map(job => <Job key={job.itemId} job={job} />)}
      <LoadMoreContainer>
        <Button onClick={loadMore}> mehr... </Button>
      </LoadMoreContainer>
    </JobListContainer>
  );
};

const JobListContainer = styled.div`
  max-width: 900px;
  margin: auto;
  text-align: left;
`;
const LoadMoreContainer = styled.div`
  margin: 20px;
`;
const LoadMore = styled.div``;

export default JobList;
