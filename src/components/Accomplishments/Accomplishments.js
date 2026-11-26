import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles'

const data = [
  { number: '01', text: 'Own features from discovery through production' },
  { number: '02', text: 'Build resilient APIs and background systems' },
  { number: '03', text: 'Improve performance with data-led debugging' },
  { number: '04', text: 'Ship across web, mobile, and cloud infrastructure' },
]

const Accomplishments = () => (
  <Section>
    <SectionTitle>How I work</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
)

export default Accomplishments
