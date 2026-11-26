import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles'

const data = [
  { number: '01', text: '4th place, 2021 CSI-InApp International Student Project Awards' },
  { number: '02', text: 'HackerRank 4-star Problem Solving' },
  { number: '03', text: 'Reduced client-side load times by 40% at Tractor Junction' },
  { number: '04', text: 'Shipped a cross-platform Wishup app for Android and iOS' },
]

const Accomplishments = () => (
  <Section>
    <SectionTitle>Highlights</SectionTitle>
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
