import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.div`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`opacity-75 font-mono text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.button`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-mono btn-link`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 0;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
  }
`

const Reference = styled.a`
  ${tw`text-white uppercase text-sm md:text-base tracking-wide font-mono`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 1em;
`

const Paragraph = styled.p`
  ${tw`text-white font-mono`};
`

const ProjectCard = ({ title, referenceLink, children, bg, content }) => {
  const [contentSwitch, setContentSwitch] = useState(false)
  const handleSwitch = () => {
    setContentSwitch(!contentSwitch)
  }
  return (
    <Wrapper bg={bg}>
      <Text>{children}</Text>
      <Title onClick={handleSwitch} className="btn-link">
        {title}
      </Title>
      <div>
        <Reference href={referenceLink} target="_blank" rel="noopener noreferrer">
          Site
        </Reference>
      </div>
      <Paragraph className={contentSwitch ? 'd-block' : 'd-none'}>{content}</Paragraph>
    </Wrapper>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  referenceLink: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
