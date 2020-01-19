import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class WorkRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: workItems } = data.allMarkdownRemark;

    return (
      <div className="row">
        {workItems &&
          workItems.map(({ node: post }) => (
            <div
              key={post.id}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link className="unit-9" to={post.fields.slug}>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${
                      !!post.frontmatter.featuredimage.childImageSharp
                        ? post.frontmatter.featuredimage.childImageSharp.fluid
                            .src
                        : post.frontmatter.featuredimage
                    })`
                  }}
                ></div>
                <div className="unit-9-content">
                  <h2>{post.frontmatter.title}</h2>
                  <span>See more</span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

WorkRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query WorkRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-item" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <WorkRoll data={data} count={count} />}
  />
);
