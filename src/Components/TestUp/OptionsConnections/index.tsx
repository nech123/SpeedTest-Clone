import React from 'react'
import {
  Container,
  OptionsDiverses,
  Connections,
  ConnectionsName,
  ConnectionsExpecial,
  MultiConnections,
  IconMulti,
  SingleConnections,
  DivAd,
  SpanInfo,
  InfoSet
} from './styles.ts'
function OptionsConnections() {
  return (
    <Container>
      <OptionsDiverses>
        <Connections>
          <ConnectionsName>Connections</ConnectionsName>
        </Connections>
        <ConnectionsExpecial>
          <MultiConnections>Multi</MultiConnections>
          <IconMulti />
          <SingleConnections>Single</SingleConnections>
        </ConnectionsExpecial>
      </OptionsDiverses>
      <DivAd>Propaganda</DivAd>
      <SpanInfo>
        <InfoSet>
          Use Speedtest® on all your devices with our free native apps.
        </InfoSet>
        <InfoSet>Download Speedtest apps for:</InfoSet>
      </SpanInfo>
    </Container>
  )
}

export { OptionsConnections }
