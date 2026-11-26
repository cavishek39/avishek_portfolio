import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href='/' style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <DiCssdeck size='3rem' /> <span>Avishek</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href='#projects'>Projects</NavLink>
      </li>
      <li>
        <NavLink href='#tech'>Technologies</NavLink>
      </li>
      <li>
        <NavLink href='#about'>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/avishek-c-211855124/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/cavishek39'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
