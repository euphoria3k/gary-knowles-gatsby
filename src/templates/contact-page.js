import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { navigate } from "gatsby-link";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import AOS from "aos";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const ContactPageTemplate = ({
  title,
  subheading,
  content,
  contentComponent,
  headerImage
}) => {
  const PageContent = contentComponent || Content;
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <div>
      <Hero fullHeight={false} title={title} image={headerImage}></Hero>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div
              className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
              data-aos="fade-up"
            >
              <h2 className="mb-5">{subheading}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PageContent className="content" content={content} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-7 mb-5">
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </div>

                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor={"name"}>
                      Your name
                    </label>
                    <input
                      className="form-control"
                      type={"text"}
                      name={"name"}
                      onChange={handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor={"email"}>
                      Email
                    </label>
                    <input
                      className="form-control"
                      type={"email"}
                      name={"email"}
                      onChange={handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor={"message"}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      onChange={handleChange}
                      required={true}
                      cols="30"
                      rows="5"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <button className="btn btn-dark" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Contact Info</h3>
                <p className="mb-0 font-weight-bold text-black">Address</p>
                <p className="mb-4 text-black">
                  7 Holland Villa's, Main Road, Great Holland, Essex, CO13 0JJ
                </p>
                <p className="mb-0 font-weight-bold text-black">Phone</p>
                <p className="mb-4">
                  <a href="#">01255 761403</a> or <a href="#">07816 897939</a>
                </p>
                <p className="mb-0 font-weight-bold text-black">
                  Email Address
                </p>
                <p className="mb-0">
                  <a href="#">info@gknowleskitchenfitter.co.uk</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  React.useEffect(() => {
    AOS.init({ duration: 800, easing: "slide", once: true });
  }, []);

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        content={post.html}
        headerImage={post.frontmatter.image}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
