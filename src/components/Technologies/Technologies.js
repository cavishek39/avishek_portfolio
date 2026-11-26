import React from 'react'
import {
  DiAndroid,
  DiAws,
  DiDatabase,
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from 'react-icons/di'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work across application development and platform engineering, with a
      recent focus on backend systems, data workflows, and AWS operations.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJava size='3rem' />
          <DiJavascript1 size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            JavaScript <br />
            TypeScript <br />
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size='3rem' />
          <DiAndroid size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React <br />
            React Native <br />
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size='3rem' />
          <DiNodejs size='3rem' />
          <DiDatabase size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js · GraphQL <br />
            Prisma · PostgreSQL <br />
            MongoDB · Redis · BullMQ
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Cloud &amp; delivery</ListTitle>
          <ListParagraph>
            AWS ECS, S3, SES <br />
            ElastiCache <br />
            Background jobs &amp; queues
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)

export default Technologies
