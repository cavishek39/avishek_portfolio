import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 0 5rem;
  padding: 1.2rem 2rem;
  border-radius: 999px;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  background: linear-gradient(110deg, #13adc7, #945dd6);
  transition: transform 180ms ease, filter 180ms ease;
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.12);
  }
  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 3rem;
  }
`;
