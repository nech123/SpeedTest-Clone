import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
  const [ip, setIp] = useState('1.1.1.1.1')
  const [city, setCity] = useState('Default')
  const [provider, setProvider] = useState('Default')
  const [typeConnection, setTypeConnection] = useState('Public')
  const [timeNow, setTimeNew] = useState('Not Working...')

  const getData = async () => {
    const res = await axios.get(
      'https://ipgeolocation.abstractapi.com/v1/?api_key=214773f6db07423e9e2da10e8f4e2036'
    )
    setIp(res.data.ip_address)
    setCity(res.data.city)
    setProvider(res.data.connection.organization_name)
    setTypeConnection(res.data.connection.connection_type)
    setTimeNew(res.data.timezone.current_time)
  }

  useEffect(() => {
    getData()
  })

  return (
    <Container>
      <LocationServer>
        <LocationServerInfo>
          <NamePPE>{provider}</NamePPE>
          <IpProver>{ip}</IpProver>
          <IpProver>Time: {timeNow}</IpProver>
        </LocationServerInfo>
        <IconProfile />
      </LocationServer>

      <SetProver>
        <IconProver />
        <SetStatusProver>
          <NameProver>{typeConnection}</NameProver>

          <CityName>{city}</CityName>
          <SetServer>Change Server</SetServer>
        </SetStatusProver>
      </SetProver>
    </Container>
  )
}
export { InfoCard }
