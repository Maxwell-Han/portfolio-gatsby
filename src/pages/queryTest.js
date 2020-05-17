import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const QueryTest = props => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        nodes {
          title
          info {
            info
          }
        }
      }
    }
  `);
  console.log(props);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default QueryTest;
