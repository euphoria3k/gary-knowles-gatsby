import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import AOS from "aos";

export default () => {
  React.useEffect(() => {
    AOS.init({ duration: 800, easing: "slide", once: true });
  }, []);

  return (
    <Layout>
      <div>
        <Hero fullHeight={false} title={"Contact Us"}></Hero>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div
                className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                data-aos="fade-up"
              >
                <h2 className="mb-5">
                  Thank you!<br></br>We will be in touch soon
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
