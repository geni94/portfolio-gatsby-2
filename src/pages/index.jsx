import React from 'react'
import { Link } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Typist from 'react-typist'

// Components
import Layout from '../components/Layout'

// Elements
import { BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'

import '../../static/main.scss'

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
    <Parallax pages={1}>
      <Hero offset={0}>
        <BigTitle>
          <Typist stdTypingDelay={15} className="typist-class" avgTypingDelay={25} cursor={simpleCursor}>
            Hello World! <br /> I'm Eugen,
          </Typist>
        </BigTitle>
        <Subtitle>
          <Typist
            stdTypingDelay={15}
            startDelay={1000}
            className="typist-class"
            avgTypingDelay={25}
            cursor={blinkingCursor}
          >
            a web and software developer.
          </Typist>
        </Subtitle>
        <div className="container">
          <Link to="/projectAbout">
            <div className="card">
              <h2>Projects</h2>
              <i className="fas fa-arrow-right" />
              <p>My Contributions</p>
              <div className="pic" />
              <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
              <button type="button" />
            </div>
          </Link>
          <Link to="/profile">
            <div className="card card2">
              <h2>Profile</h2>
              <i className="fas fa-arrow-right" />
              <p>Get to know me</p>
              <div className="pic" />
              <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
              <button type="button" />
            </div>
          </Link>
        </div>
        {/* <div className="link-menu"> */}
        {/*  <Link to="/projectAbout">Projects</Link> */}
        {/*  <Link to="/profile">Profile</Link> */}
        {/* </div> */}
      </Hero>
    </Parallax>
  </>
)

export default Index
