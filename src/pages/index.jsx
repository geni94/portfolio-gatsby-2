import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Typist from 'react-typist'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import '../../static/main.scss'

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
    <Parallax pages={5}>
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
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
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
      <About offset={3}>
        <Title>About</Title>
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
      <Contact offset={4}>
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
