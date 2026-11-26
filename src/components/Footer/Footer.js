import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:cavishek39@gmail.com'>cavishek39@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Engineering reliable products from idea to production.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/cavishek39/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons target='_blank' rel='noopener noreferrer' href='https://github.com/cavishek39'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
