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

const ProjectAbout = () => (
  <>
    <Layout />
    <Parallax pages={2}>
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
            link="/projectAbout"
            bg="linear-gradient(to right, #f2d024 0%, #70818a 100%)"
          >
            This project is my entry to Adobe's #ChallengeYourPerspective contest.
          </ProjectCard>
          <ProjectCard
            title="Mixab.ly / Bump.fm"
            link="/projectAbout"
            referenceLink="https://www.bump.fm"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="GHO"
            link="/projectAbout"
            referenceLink="https://globalhealthobjectives.org"
            bg="linear-gradient(to right, #103d60 0%, #b2b7ff 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Boardaboat"
            link="/projectAbout"
            referenceLink="https://boardaboat.com"
            bg="linear-gradient(to right, #103d60 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
          <ProjectCard
            title="Advisor4Schools"
            link="/projectAbout"
            referenceLink="http://advisor.4schools.com"
            bg="linear-gradient(to right, #9babb4 0%, #364349 100%)"
          >
            Lorem Ipsum lorem ipsum is the standard.
          </ProjectCard>
          <ProjectCard
            title="MIBS site"
            link="/projectAbout"
            referenceLink="http://mcgill.com"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Lorem Ipsum lorem ipsum is the standard.
          </ProjectCard>
          <ProjectCard
            title="Oda"
            link="/projectAbout"
            referenceLink="`https://odahotel.al`"
            bg="linear-gradient(to right, #684f1d 0%, #1f9d55 100%)"
          >
            Lorem Ipsum lorem ipsum is the standard.
          </ProjectCard>
          <ProjectCard
            title="My Portfolio"
            link="/projectAbout"
            referenceLink="https://geni94.github.com"
            bg="linear-gradient(to right, #72173a 0%, #e9af32 100%)"
          >
            This portfolio website.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
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
