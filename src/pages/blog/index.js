import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.frontmatter.id}>
          <Link to={`${node.slug}`}>{node.frontmatter.name}</Link>
          <p>{node.frontmatter.datePublished}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___datePublished }) {
      nodes {
        id
        frontmatter {
          author
          datePublished(formatString: "MMMM D, YYYY")
          name
        }
        slug
      }
    }
  }
`;

export default BlogPage;
