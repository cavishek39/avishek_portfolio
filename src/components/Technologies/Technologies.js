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
      Tools and technologies I use across mobile, web, backend, data, and AI
      projects.
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
            TypeScript
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
            Next.js · Redux · Tailwind CSS
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
            Node.js · Express.js <br />
            REST APIs · GraphQL <br />
            PostgreSQL
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
            AWS · Docker <br />
            LangChain · LangGraph <br />
            Gemini AI · Pinecone
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)

export default Technologies
