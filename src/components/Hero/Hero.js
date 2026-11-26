import React from 'react'
import { aboutMe, intro } from '../../constants/constants'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { ContactLink, LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Avishek Chatterjee
        </SectionTitle>
        <SectionText>{intro}</SectionText>
        <SectionText>
          I build backend platforms and full-stack product experiences, from API
          design and data workflows to production operations.
        </SectionText>
        <ContactLink href='mailto:cavishek39@gmail.com'>Get in touch</ContactLink>
      </LeftSection>
    </Section>
  </>
)

export default Hero
