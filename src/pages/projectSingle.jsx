import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Layout from '../components/Layout'

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`
const Text = styled.div`
  ${tw`opacity-75 font-mono text-sm md:text-base`}
`

const ProjectSingle = () => (
  <>
    <Layout />
    <Parallax pages="1">
      <p>This is a description of the work.</p>
    </Parallax>
  </>
)

export default ProjectSingle
