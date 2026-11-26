import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  padding: 3rem 0;
  place-items: stretch;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    padding-bottom: 0;
  }
`
export const BlogCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(33, 45, 69, 0.72);
  border-radius: 16px;
  text-align: left;
  width: 100%;
  min-height: 310px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.2rem;
  transition: transform 180ms ease, border-color 180ms ease;
  &:hover {
    transform: translateY(-4px);
    border-color: rgba(19, 173, 199, 0.6);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 0;
    padding: 2rem;
  }
`
export const TitleContent = styled.div`
  text-align: left;
  z-index: 20;
  width: 100%;
  padding-top: 0;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 0;
  color: #9cc9e3;
  z-index: 20;
  padding: 0;
  font-size: ${(props) => (!!props.title ? '3rem' : '2rem')};
  /* background-color: blue; */
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

export const CardInfo = styled.p`
  width: 100%;
  padding: 0;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: auto 0 0;
  justify-content: flex-start;
`

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: rgba(19, 173, 199, 0.14);
  border: 1px solid rgba(19, 173, 199, 0.3);
  border-radius: 999px;
  transition: 0.5s;
  &:hover {
    background: rgba(19, 173, 199, 0.3);
  }
`

export const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 0;
`
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 0.5rem 0.9rem;
`
