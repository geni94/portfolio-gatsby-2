import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import tw from 'tailwind.macro'

// Components
// import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Title } from '../elements/Titles'
import ProjectCard from '../components/ProjectCard'
import Projects from '../views/Projects'
import Inner from '../elements/Inner'
import Contact from '../views/Contact'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const ContactText = styled.p`
  ${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`

const ProjectAbout = () => (
  <>
    <Layout />
    <Parallax pages={3}>
      <Projects offset={0}>
        <div className="link-menu about">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <Title>Projects & Contributions</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Ritech Solutions"
            referenceLink="https://www.ritech.co"
            bg="linear-gradient(to right, #f2d024 0%, #70818a 100%)"
          >
            [Currently] working as web developer. Dealing with AWS, Vue, Jenkins, etc.
          </ProjectCard>
          <ProjectCard
            title="Bump.fm"
            referenceLink="https://www.bump.fm"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Remote front end developer for a Spotify-playlist streaming web and mobile platform.(no longer operating)
          </ProjectCard>
          <ProjectCard
            title="GHO"
            referenceLink="https://globalhealthobjectives.org"
            bg="linear-gradient(to right, #103d60 0%, #b2b7ff 100%)"
          >
            Web developer and Digital Adviser for a sub-branch of WHO, in Geneva.
          </ProjectCard>
          <ProjectCard
            title="Boardaboat"
            referenceLink="https://boardaboat.com"
            bg="linear-gradient(to right, #103d60 0%, #00FFEE 100%)"
          >
            Front end developer and Testing for an Airbnb-inspired boat trips platform, now based in London.
          </ProjectCard>
          {/* <ProjectCard */}
          {/* title="Advisor4Schools" */}
          {/* link="/projectAbout" */}
          {/* referenceLink="http://advisor.4schools.com" */}
          {/* bg="linear-gradient(to right, #9babb4 0%, #364349 100%)" */}
          {/* > */}
          {/* Lorem Ipsum lorem ipsum is the standard. */}
          {/* </ProjectCard> */}
          {/* <ProjectCard */}
          {/* title="MIBS site" */}
          {/* link="/projectAbout" */}
          {/* referenceLink="http://mcgill.com" */}
          {/* bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)" */}
          {/* > */}
          {/* Lorem Ipsum lorem ipsum is the standard. */}
          {/* </ProjectCard> */}
          <ProjectCard
            title="Oda"
            referenceLink="`https://odahotel.al`"
            bg="linear-gradient(to right, #684f1d 0%, #1f9d55 100%)"
          >
            Small web project for a local hotel based in Tirana, Albania.
          </ProjectCard>
          <ProjectCard
            title="My Portfolio"
            link="/"
            referenceLink="https://geni94.github.io"
            bg="linear-gradient(to right, #72173a 0%, #e9af32 100%)"
          >
            This portfolio website, built with Gatsby.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={2}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <a href="mailto:eugen.yzeiri@gmail.com">Say hi</a> or find me <a href="https://github.com/geni94">GitHub</a>{' '}
            &amp; <a href="https://www.linkedin.com/in/eugen-yzeiri-8aa10288/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019, crafted by <a href="https://github.com/geni94">Eugen Yzeiri</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         siteUrl
//       }
//     }
//   }
// `
export default ProjectAbout
