import * as React from "react";
import { graphql } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import video from "../images/holo-min.mp4";

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='About Page' />
      <div className='about-holder'>
        <div className='intro'>
          <div className='text'>
            <div className='abs-text'>
              <h1>About Page</h1>
              <p>
                I have a passion for great design, of any kind. I love the
                extremes, either a clean, minimalist design where form follows
                function or a crazy brutalist page where you loose yourself
                amongst the horrible colours and images. Going to the extremes
                always proves to be beneficial.
              </p>
              <p>
                I have a passion for great design, of any kind. I love the
                extremes, either a clean, minimalist design where form follows
                function or a crazy brutalist page where you loose yourself
                amongst the horrible colours and images. Going to the extremes
                always proves to be beneficial.
              </p>
              <p>
                I have a passion for great design, of any kind. I love the
                extremes, either a clean, minimalist design where form follows
                function or a crazy brutalist page where you loose yourself
                amongst the horrible colours and images. Going to the extremes
                always proves to be beneficial.
              </p>
            </div>
            <div className="video-holder">
            <video autoPlay loop muted>
                  <source src={video} type="video/mp4"/>
            </video>
            </div>
          </div>
          <div className='skills-holder'>
            <div className='info'>
              <div className='left'>
                <h2>Education</h2>
              </div>
              <div className='right'>
                {" "}
                <i>Jönköping University 2021 - 2023</i> <br />{" "}
                <h4 className='tight'>
                  Degree of Master in User Experience Design
                </h4>
                <br /> <br />
                <i>Jönköping University 2018 - 2021</i> <br />{" "}
                <h4 className='tight'>
                  Degree of Bachelor with a major in Informatics specialisation
                  in New Media Design
                </h4>{" "}
                <br /> <br /> <i>American College Arcus 2013 - 2018</i> <br />{" "}
                <h4 className='tight'>Excellent gymnasium diploma</h4>
                <br />
                <h4 className='tight'>
                  +Cambridge English: Advanced (CAE)
                </h4>{" "}
              </div>
            </div>
            <div className='info'>
              <div className='left'>
                <h2>Experience</h2>
              </div>
              <div className='right'>
                <i>Front-end Dev - 12months</i> <br />{" "}
                <h4 className='tight'>
                  Fulltime development and support of legacy projects at{" "}
                  <a href='https://edesign.bg/en'>eDesign</a> - Web Development
                  Agency
                </h4>{" "}
                <br /> <i>UI/UX Internship - 9weeks</i> <br />{" "}
                <h4 className='tight'>
                  Internship at <a href='https://ny.se/'>NY</a> - Full Service
                  Creative Agency
                </h4>{" "}
                <br /> <i>Digital Designer - 9months</i> <br />{" "}
                <h4 className='tight'>
                  Designer and board member of Students of Sustainable Action
                </h4>
                <br /> <i>Cient-Side TA</i> <br />{" "}
                <h4 className='tight'>
                  Teacher Assistant in computer lab sessions
                </h4>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* <div>
            <StaticImage
                className="me"
                src="../images/me.png"
                quality={95}
                alt="Profile picture"
            />
            </div> */}
        {/* <div className="skills-holder">
            
        </div> */}
      </div>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
