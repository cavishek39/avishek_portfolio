import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

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
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+91-629-613-0757'>+91-629-613-0757</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='cavishek39@gmail.com'>cavishek39@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Never stop learning because life never stops</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://www.linkedin.com/in/avishek-c-211855124/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://github.com/cavishek39'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://google.com'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
