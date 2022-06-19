import styled from 'styled-components'
import { SiSpeedtest } from 'react-icons/si'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 70px;
  padding-top: 10px;
  background-color: #141426;
  justify-content: space-between;
  display: flex;
`

export const LogoInstruction = styled.div`
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 13px;
  align-items: center;
  justify-content: center;
  color: #fff;

  &:hover {
    color: #39ccda;
    cursor: pointer;
  }
`
export const IconLogo = styled(SiSpeedtest)`
  width: 22px;
  height: 22px;
`
export const NameLogo = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  font-size: 20px;
  font-weight: 500;
`
