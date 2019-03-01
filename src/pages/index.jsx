import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Typist from 'react-typist'

// Components
import Layout from '../components/Layout'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Contact from '../views/Contact'

import '../../static/main.scss'

const ContactText = styled.p`
  ${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`

const simpleCursor = {
  show: true,
  hideWhenDone: true,
  hideWhenDoneDelay: 250,
}

const blinkingCursor = {
  show: true,
  hideWhenDone: false,
  blink: true,
}

const Index = () => (
  <>
    <Layout />
    <Parallax pages={2}>
      <Hero offset={0}>
        <BigTitle>
          <Typist stdTypingDelay={15} className="typist-class" avgTypingDelay={25} cursor={simpleCursor}>
            Hello World <br /> I'm Eugen,
          </Typist>
        </BigTitle>
        <Subtitle>
          <Typist
            stdTypingDelay={15}
            startDelay={2000}
            className="typist-class"
            avgTypingDelay={25}
            cursor={blinkingCursor}
          >
            a web and software developer.
          </Typist>
        </Subtitle>
        <div className="link-menu">
          <Link to="/projectAbout">Projects</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </Hero>
      <Contact offset={1}>
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

export default Index
