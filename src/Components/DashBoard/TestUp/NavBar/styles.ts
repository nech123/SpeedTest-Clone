import styled from 'styled-components'
import { CgSelectO } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'

export const DivBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const DivWhite = styled.div`
  width: 40%;
  height: 80px;
  background-color: #fff;
  margin-left: -200px;
`
export const Results = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding-top: 25px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media (max-width: 1400px) {
    margin-left: -190px;
  }
  &:hover {
    color: #2661e8;
    cursor: pointer;
  }
`
export const IconResults = styled(CgSelectO)`
  width: 20px;
  height: 20px;
  border-radius: 15px;
`
export const NameResults = styled.h1`
  display: flex;
  font-weight: 500;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Settings = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  padding-top: 25px;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  color: #fff;

  &:hover {
    color: #2661e8;
    cursor: pointer;
  }
`
export const IconSettings = styled(IoSettingsOutline)`
  width: 20px;
  height: 20px;
`
export const NameSettings = styled.h1`
  display: flex;
  font-size: 13px;
  font-weight: 500;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const DivControl = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 30%;
  height: 100%;
  margin-left: 170px;
`
export const DivAd = styled.div`
  height: 200px;
  display: flex;
  width: 250px;
  position: absolute;
  margin-left: 900px;
  margin-top: 66px;
  background-color: #fff;
`
