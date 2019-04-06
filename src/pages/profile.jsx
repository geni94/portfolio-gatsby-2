import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Layout from '../components/Layout'

import About from '../views/About'

import avatar from '../images/avatar.jpg'
import { BigTitle, Title } from '../elements/Titles'
import Inner from '../elements/Inner'
import Contact from '../views/Contact'

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const MenuDiv = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`}
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white font-mono pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-mono pt-6 md:pt-12 text-justify`};
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  padding: 1em;
  border: 2px solid lightgrey;
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
    <Parallax pages={4}>
      <MenuDiv offset={0}>
        <div className="link-menu profile">
          <Link to="/">Home</Link>
          <Link to="/projectAbout">Projects</Link>
        </div>
        <BigTitle>About Me</BigTitle>
      </MenuDiv>
      <About className="about--wrapper" offset={0.7}>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            • 24 years old <br /> • web and software developer <br /> • based in Tirana, Albania
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          For the past 3 years, I've been actively developing web apps and software in different domains and for various
          clients. I've worked extensively with Agile and Scrum teams, but also freelanced work to various, local
          clients. Currently, I'm engaged as a full-time web developer at 'Ritech Solutions', at its offices in Tirana,
          Albania. <br /> <br />
          My specialties mostly include JavaScript and Python-based environments. Most of my experiences have been on
          client-side apps, however I've worked with highly-specialized back-end teams very often, and have developed
          APIs and cloud-based data structures before, as a full-stack developer. <br /> <br /> My preferred tech stack
          is JavaScript/Node.js-based [preferably coupled with Amazon Web Services (which I use in my everyday work), a
          a Vue or React powered interface (I prefer to decide that case-by-case)]. Besides the affirmed above JS
          libraries, I've experimented with new SSR-based libraries, such as Gatsby (where I'm also a
          maintainer/contributor), Next.js and new design patterns such as functional programming or Serverless. The
          last one has made me love cloud services even more, especially AWS Lambda (or Lambda-like) services. <br />{' '}
          <br /> Apart from engineering modern, detailed but simple, blazing-fast apps, I love to mingle with data as
          well. I have a good understanding of Machine Learning in practice, and applied types of Neural Networks -
          using Python's "numpy, scipy and pandas". However, with the every day updates that happen in the Data Science
          domain, I've been happily focused on TensorFlow and its ease of applications. <br /> <br />
          <br /> <br /> Studied Computer & Information Sciences at University of Geneva. Able to think in higher levels
          of code and assist in software engineering and team leading. <br /> <br /> I speak fluent in English and
          French (and some Italian).
        </AboutDesc>
      </About>
      <About offset={2}>
        <AboutHero>
          <AboutSub>
            • I love Slack <br /> • I believe in Quantum Mechanics <br /> • I play the piano and Skyrim
          </AboutSub>
        </AboutHero>
      </About>
      <Contact offset={2.7}>
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
