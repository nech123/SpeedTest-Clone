import React from 'react'
import { MenuDropFirst } from '../../Menu'
import { Container, LogoInstruction, IconLogo, NameLogo } from './styles.ts'

function TitlePage() {
  return (
    <Container>
      <LogoInstruction>
        <IconLogo />
        <NameLogo>SPEEDTEST</NameLogo>
      </LogoInstruction>

      <MenuDropFirst />
    </Container>
  )
}

export { TitlePage }
