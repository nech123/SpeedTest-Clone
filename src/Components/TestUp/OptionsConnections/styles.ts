import styled from 'styled-components'
import { TbChartArrows } from 'react-icons/tb'

export const Container = styled.div`
  width: 100%;
  height: 275px;
  display: flex;
  flex-direction: column;
`
export const OptionsDiverses = styled.div`
  width: 87%;
  height: 33%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    width: 75%;
  }
`
export const Connections = styled.div`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  display: flex;
`
export const ConnectionsName = styled.p`
  font-size: 16px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 1400px) {
    font-size: 12px;
  }
`
export const ConnectionsExpecial = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 17px;
`
export const MultiConnections = styled.h1`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (max-width: 1400px) {
    font-size: 12px;
  }

  &:hover {
    color: #2661e8;
    cursor: pointer;
  }
`
export const IconMulti = styled(TbChartArrows)`
  width: 35px;
  height: 35px;
  color: #fff;
  border: 1px solid white;
  border-radius: 50%;
  padding: 4px;

  @media (max-width: 1400px) {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: #2661e8;
    cursor: pointer;
  }
`
export const SingleConnections = styled.h1`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (max-width: 1400px) {
    font-size: 12px;
  }
  &:hover {
    color: #2661e8;
    cursor: pointer;
  }
`
export const DivAd = styled.div`
  width: 40%;
  height: 33%;
  background-color: #fff;
  margin-left: 440px;

  @media (max-width: 1400px) {
    margin-left: 290px;
  }
`
export const SpanInfo = styled.div`
  width: 87%;
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InfoSet = styled.span`
  font-size: 18px;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
