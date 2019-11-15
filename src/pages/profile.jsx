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
  flex-direction: column !important;
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

const IconContainer = styled.div`
  ${tw`text-white font-mono pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
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
        <AboutHero>
          <Avatar src={avatar} alt="Eugen Yzeiri" />
          <AboutSub>
            • web and software developer <br /> • Contributing since 2016 <br /> • based in Tirana, Albania <br /> • CS
            at the University of Geneva
          </AboutSub>
        </AboutHero>
      </MenuDiv>
      {/* <About className="about--wrapper" offset={1}> */}
      {/*  <div className="center"> */}
      {/*    <div className="card"> */}
      {/*      <div className="additional"> */}
      {/*        <div className="user-card"> */}
      {/*          <div className="level center">Level 13</div> */}
      {/*          <div className="points center">5,312 Points</div> */}
      {/*          <Avatar src={avatar} alt="Eugen Yzeiri" /> */}
      {/*        </div> */}
      {/*        <div className="more-info"> */}
      {/*          <h1>Jane Doe</h1> */}
      {/*          <div className="coords"> */}
      {/*            <span>Group Name</span> */}
      {/*            <span>Joined January 2019</span> */}
      {/*          </div> */}
      {/*          <div className="coords"> */}
      {/*            <span>Position/Role</span> */}
      {/*            <span>City, Country</span> */}
      {/*          </div> */}
      {/*          <div className="stats"> */}
      {/*            <div> */}
      {/*              <div className="title">Awards</div> */}
      {/*              <i className="fa fa-trophy" /> */}
      {/*              <div className="value">2</div> */}
      {/*            </div> */}
      {/*            <div> */}
      {/*              <div className="title">Matches</div> */}
      {/*              <i className="fa fa-gamepad" /> */}
      {/*              <div className="value">27</div> */}
      {/*            </div> */}
      {/*            <div> */}
      {/*              <div className="title">Pals</div> */}
      {/*              <i className="fa fa-group" /> */}
      {/*              <div className="value">123</div> */}
      {/*            </div> */}
      {/*            <div> */}
      {/*              <div className="title">Coffee</div> */}
      {/*              <i className="fa fa-coffee" /> */}
      {/*              <div className="value infinity">∞</div> */}
      {/*            </div> */}
      {/*          </div> */}
      {/*        </div> */}
      {/*      </div> */}
      {/*      <div className="general"> */}
      {/*        <h1>Jane Doe</h1> */}
      {/*        <p> */}
      {/*          A programmer proven in multiple Agile and Scrum environments, with in office and remote experiences in */}
      {/*          high level functioning teams. Mostly uses JavaScript and Python, although he has experimented with */}
      {/*          GoLang and Java in personal projects. Studied CS the University of Geneva. */}
      {/*        </p> */}
      {/*        <span className="more">Mouse over for more blabs</span> */}
      {/*      </div> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </About> */}
      <About offset={1}>
        <IconContainer className="icon--container">
          <h3>Technical Expertise</h3>
          <div>
            <i className="tooltip devicon-nodejs-plain-wordmark">
              <span className="tooltiptext">Web Development</span>
            </i>
            <i className="tooltip devicon-python-plain-wordmark">
              <span className="tooltiptext">Software, MVC apps, Automation</span>
            </i>
            <i className="tooltip devicon-go-plain">
              <span className="tooltiptext">Web Development</span>
            </i>
            <i className="tooltip devicon-linux-plain">
              <span className="tooltiptext">Software and Embedded Apps</span>
            </i>
          </div>

          <div>
            <i className="tooltip devicon-vuejs-plain-wordmark">
              <span className="tooltiptext">Front end, PWA, SPA</span>
            </i>
            <i className="tooltip devicon-react-original-wordmark">
              <span className="tooltiptext">Front end, PWA, SPA, Mobile</span>
            </i>
          </div>

          <div>
            <i className="tooltip devicon-amazonwebservices-plain-wordmark" rel="Delivery">
              <span className="tooltiptext">Cloud Services (EC2, S3, Lambda)</span>
            </i>
            <i className="tooltip devicon-webpack-plain-wordmark">
              <span className="tooltiptext">Optimized JavaScript builds</span>
            </i>
            <i className="tooltip devicon-nginx-original">
              <span className="tooltiptext">Web Services</span>
            </i>
            <i className="tooltip devicon-git-plain-wordmark">
              <span className="tooltiptext">Project Delivery with CI and CD pipelines</span>
            </i>
          </div>
        </IconContainer>
      </About>
      <Contact offset={2}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <a href="mailto:eugen.yzeiri@gmail.com">Say hi</a> or find me <a href="https://github.com/geni94">GitHub</a>{' '}
            &amp; <a href="https://www.linkedin.com/in/eugen-yzeiri-8aa10288/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          <a href="https://github.com/geni94">&copy; 2019</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Profile
