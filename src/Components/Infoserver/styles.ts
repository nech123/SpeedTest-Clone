import styled from 'styled-components'
import { TbWorld } from 'react-icons/tb'

export const Container = styled.div`
  display: none;
  position: absolute;
  width: 700px;
  height: 500px;
  border: 1px solid red;
  margin-left: 540px;
  margin-top: 100px;
  background-color: #26273b;
`
export const DivServerSide = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid violet;
  height: 100%;
  flex-direction: column;
`
export const DivInfoServerName = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const DivIconServer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const IconServer = styled(TbWorld)`
  width: 40px;
  padding: 7px;
  height: 40px;
  color: #76788d;
  border: 1px solid #4a4c5f;
  border-radius: 50%;
`
export const DivCity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`
export const ProviderName = styled.h1`
  font-size: 18.5px;
  letter-spacing: 0.5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  color: white;
`
export const ProviderCity = styled.h1`
  font-size: 15px;
  letter-spacing: 1px;
  font-family: Arial, Helvetica, sans-serif;
  color: #85879d;
`
export const BtnClose = styled.h1`
  font-size: 20px;
  color: white;
`
export const DivSearch = styled.div`
  width: 100%;
  height: 40px;
  align-items: flex-start;
  display: flex;
  margin-top: 7px;
  flex-direction: column;
`
export const TitleSearch = styled.h1`
  font-size: 17px;
  color: #7e7f94;
  margin-left: 11px;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
`
export const InputSearch = styled.input`
  width: 96%;
  color: white;
  display: flex;
  margin-top: 7px;
  margin-left: 10px;
`
export const DivSelectorName = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 7px;
`
export const ServerIndicator = styled.h1`
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  color: #7e7f94;
`
export const DivAllServerOption = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 7px;
`
export const UlServers = styled.div``
export const LiListServer = styled.h1``
export const DivParalel = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  align-items: center;
`
export const TitleLogin = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #fff;
  font-size: 25px;
  display: flex;
`
export const SubTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #fff;
  font-size: 15px;
  display: flex;
`
export const BtnLogin = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: blue;
  font-size: 25px;
  display: flex;
`
