import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import tw from 'tailwind.macro'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import About from '../views/About'

const AboutSub = styled.span`
  ${tw`text-white font-mono pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const ProjectAbout = () => (
  <>
    <Layout />
    <Parallax pages={2}>
      <About offset={1}>
        <AboutSub>Url:Insert some text here for a certain project</AboutSub>
      </About>
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
