import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const BlogPage = ({ data }) => {
  console.log(data.allFile.nodes);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allFile.nodes.map(postName => (
        <li key={postName.name}>{postName.name}</li>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
