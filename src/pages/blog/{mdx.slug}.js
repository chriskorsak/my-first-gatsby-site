import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h2>{data.mdx.frontmatter.name}</h2>
      <p>{data.mdx.frontmatter.datePublished}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        datePublished(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
