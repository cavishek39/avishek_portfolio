import React from 'react'
import {
  DiAndroid,
  DiAws,
  DiDatabase,
  DiJava,
  DiJavascript,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiZend,
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
      I've worked with a range a technologies in the mobile and as well as web
      development world. From Front-end development to Back-end development To
      Design.
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
            Experiece with, <br />
            Java <br />
            C++ <br />
            JavaScript <br />
            TypeScript <br />
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
            Experiece with, <br />
            React Native <br />
            React.js <br />
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
            Experience with, <br />
            Node <br />
            SQL and NoSQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with tools like, <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)

export default Technologies
