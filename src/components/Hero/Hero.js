import React from 'react'
import { intro } from '../../constants/constants'
import resume from '../../../content/resume.json'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { ActionLinks, ContactLink, LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Avishek Chatterjee
        </SectionTitle>
        <SectionText>{intro}</SectionText>
        <SectionText>
          I work across mobile and full-stack development, backend APIs, payment
          workflows, and AI-powered applications.
        </SectionText>
        <ActionLinks>
          <ContactLink href='mailto:cavishek39@gmail.com'>Get in touch</ContactLink>
          {resume.file && resume.file.toLowerCase().endsWith('.pdf') && (
            <ContactLink
              href={resume.file}
              download='Avishek-Chatterjee-Resume.pdf'
              $secondary
            >
              Download resume
            </ContactLink>
          )}
        </ActionLinks>
      </LeftSection>
    </Section>
  </>
)

export default Hero
