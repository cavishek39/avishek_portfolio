import styled from 'styled-components'

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin: 20px 0 32px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 14px;
    margin: 20px 0 28px;
  }
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  box-sizing: border-box;
  min-height: 210px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${props => props.theme.breakpoints.md} {
    min-height: 180px;
    padding: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    min-height: 0;
    padding: 18px;
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin: 0;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  overflow-wrap: anywhere;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 22px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
