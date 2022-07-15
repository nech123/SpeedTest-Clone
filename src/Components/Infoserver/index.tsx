import React from 'react'
import {
  Container,
  DivServerSide,
  DivInfoServerName,
  DivIconServer,
  IconServer,
  DivCity,
  ProviderName,
  ProviderCity,
  BtnClose,
  DivSearch,
  TitleSearch,
  InputSearch,
  DivSelectorName,
  ServerIndicator,
  DivAllServerOption,
  UlServers,
  LiListServer,
  DivParalel,
  TitleLogin,
  SubTitle,
  BtnLogin
} from './styles.ts'

function InfoServerCard() {
  return (
    <>
      <Container>
        <DivServerSide>
          <DivInfoServerName>
            <DivIconServer>
              <IconServer />
            </DivIconServer>
            <DivCity>
              <ProviderName>Netlink Provedor</ProviderName>
              <ProviderCity>Jeguié</ProviderCity>
            </DivCity>
          </DivInfoServerName>
          <DivSearch>
            <TitleSearch>Search</TitleSearch>
            <InputSearch />
          </DivSearch>

          <DivSelectorName>
            <ServerIndicator>Servers close for you:</ServerIndicator>
          </DivSelectorName>
          <DivAllServerOption>
            <UlServers>
              <LiListServer>1</LiListServer>
              <LiListServer>2</LiListServer>
              <LiListServer>3</LiListServer>
              <LiListServer>4</LiListServer>
              <LiListServer>5</LiListServer>
              <LiListServer>6</LiListServer>
              <LiListServer>7</LiListServer>
              <LiListServer>8</LiListServer>
            </UlServers>
          </DivAllServerOption>
        </DivServerSide>

        <DivParalel>
          <TitleLogin>BECOME A HOST</TitleLogin>
          <BtnClose />
          <SubTitle>
            Jois us in providing the worlds most accurate speedtest platform.
          </SubTitle>
          <BtnLogin>Sign Up</BtnLogin>
        </DivParalel>
      </Container>
    </>
  )
}

export default InfoServerCard
