import React from 'react'
import { ButtonGo } from './ButtonGo/index.tsx'
import { InfoCard } from './Infocard/index.tsx'
import { NavBar } from './NavBar/index.tsx'
import { OptionsConnections } from './OptionsConnections/index.tsx'
import { Container } from './styles.ts'

function TestUp() {
  return (
    <>
      <Container>
        <NavBar />
        <ButtonGo />
        <InfoCard />
        <OptionsConnections />
      </Container>
    </>
  )
}

export { TestUp }
