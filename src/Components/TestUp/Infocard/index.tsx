import React from 'react'
import {
  Container,
  LocationServer,
  LocationServerInfo,
  NameProver,
  IpProver,
  IconProfile,
  SetProver,
  IconProver,
  SetStatusProver,
  NamePPE,
  CityName,
  SetServer
} from './styles.ts'

function InfoCard() {
  return (
    <Container>
      <LocationServer>
        <LocationServerInfo>
          <NameProver>
            J.C. Comercio E Servicos de Provedor de Interner
          </NameProver>
          <IpProver>Your IP</IpProver>
        </LocationServerInfo>
        <IconProfile />
      </LocationServer>

      <SetProver>
        <IconProver />
        <SetStatusProver>
          <NamePPE>NetLink Provedor</NamePPE>
          <CityName>Itabuna</CityName>
          <SetServer>Change Server</SetServer>
        </SetStatusProver>
      </SetProver>
    </Container>
  )
}
export { InfoCard }
