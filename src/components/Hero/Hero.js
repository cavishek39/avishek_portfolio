import React from 'react'
import { aboutMe, intro } from '../../constants/constants'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        {/* <SectionTitle center></SectionTitle> */}
        <SectionTitle main center>
          Hi, I am <br />
          Avishek Chatterjee <br /> Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>{intro}</SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
)

export default Hero
