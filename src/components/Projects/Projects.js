import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            {p.image && <Img src={p.image} alt={`${p.title} project`} />}
            <TitleContent>
              <HeaderThree className='header-three'>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>
                })}
              </TagList>
            </div>
            {(p.source || p.visit) && <UtilityList>
              {p.source && (
                <ExternalLinks target='_blank' rel='noopener noreferrer' href={p.source}>
                  Code
                </ExternalLinks>
              )}
              {p.visit && (
                <ExternalLinks target='_blank' rel='noopener noreferrer' href={p.visit}>
                  {p.visitLabel || 'Visit'}
                </ExternalLinks>
              )}
            </UtilityList>}
          </BlogCard>
        )
      })}
    </GridContainer>
  </Section>
)

export default Projects
