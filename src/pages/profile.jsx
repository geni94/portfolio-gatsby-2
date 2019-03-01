import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Layout from '../components/Layout'

import About from '../views/About'

import avatar from '../images/avatar.jpg'
import { Title } from '../elements/Titles'
import Inner from '../elements/Inner'
import Contact from '../views/Contact'

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white font-mono pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-mono pt-6 md:pt-12 text-justify`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`
const ContactText = styled.p`
  ${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
`

const Profile = () => (
  <>
    <Layout />
    <Parallax pages={2}>
      <About offset={0.3}>
        <div className="link-menu profile">
          <Link to="/">Home</Link>
          <Link to="/projectAbout">Projects</Link>
        </div>
        <Title>About Me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            • 24 years old <br /> • web and software developer <br /> • based in Tirana, Albania
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I enjoy mixing creativity and simplicity. My work tends to be detail-oriented, test-friendly and have a
          problem-solving attitude. Having lived in both developed and developing countries in the continent, I believe
          I understand very well the European market. With a diversified portfolio, I've had professional experiences on
          frontend/full-stack/software development, and have been keen on trying new data-driven technologies. <br />{' '}
          Studied Computer & Information Sciences at University of Geneva. Having worked continuously with various
          Scrum/Agile teams, my skills have been proven in different, flexible working environments. I tend to follow
          object-oriented principles and like test-driven, mobile-first environments. <br /> Able to think in higher
          levels of code and assist in software engineering. Fluent in English and French (and some Italian).
        </AboutDesc>
      </About>
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

export default Profile
