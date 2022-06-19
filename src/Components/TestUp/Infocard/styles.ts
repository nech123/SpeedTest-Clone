import styled from 'styled-components'
import { FiUser } from 'react-icons/fi'
import { TbWorld } from 'react-icons/tb'

export const Container = styled.div`
  width: 50%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 375px;
  flex-direction: row;
  gap: 50px;

  @media (max-width: 1400px) {
    width: 50%;
    height: 100px;
    margin-left: 100px;
  }
`
export const LocationServer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1400px) {
    width: 64%;
    height: 100%;
  }
`
export const LocationServerInfo = styled.div`
  width: 50%;
  height: 60%;
  justify-content: start;
  display: flex;
  flex-direction: column;
  padding-left: 55px;
  gap: 10px;
  margin-left: 190px;

  @media (max-width: 1400px) {
    width: 64%;
    height: 100%;
  }
`
export const NameProver = styled.p`
  font-size: 20px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 1400px) {
    font-size: 15px;
    margin-top: 10px;
  }
`
export const IpProver = styled.p`
  font-size: 18px;
  color: gray;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const IconProfile = styled(FiUser)`
  width: 42px;
  height: 42px;
  color: #3d3e50;
  display: flex;
  border-radius: 21px;
  border: 1px solid #3d3e50;
  padding: 8.5px;

  @media (max-width: 1400px) {
    width: 20px;
    height: 20px;
    padding: 2px;
    border: 1px solid #3d3e50;
    border-radius: 10px;
    display: flex;
  }

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`
export const SetProver = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1400px) {
    width: 50%;
    height: 100px;
  }
`
export const IconProver = styled(TbWorld)`
  width: 42px;
  height: 42px;
  color: #3d3e50;
  display: flex;
  border-radius: 21px;
  border: 1px solid #3d3e50;
  padding: 8.5px;

  @media (max-width: 1400px) {
    width: 20px;
    height: 20px;
    padding: 2px;
    border: 1px solid #3d3e50;
    border-radius: 10px;
    display: flex;
  }

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`
export const SetStatusProver = styled.div`
  width: 50%;
  height: 50%;
  justify-content: start;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
`
export const NamePPE = styled.p`
  color: #fff;
  font-size: 23px;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 1400px) {
    font-size: 15px;
  }
`
export const CityName = styled.p`
  font-size: 17px;
  color: gray;
  @media (max-width: 1400px) {
    font-size: 15px;
  }

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const SetServer = styled.p`
  font-size: 23px;
  color: #2e9ed7;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (max-width: 1400px) {
    font-size: 15px;
  }

  &:hover {
    color: #2661e8;
    cursor: pointer;
  }
`
