import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles'

const data = [
  { number: 3, text: 'Deployed production level Mobile App' },
  { number: 2, text: 'Internships' },
  { number: '4th', text: 'Position in CSI In-App Global Hackathon 2021' },
  { number: '4', text: 'Star Coder in HackerRank' },
]

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
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
