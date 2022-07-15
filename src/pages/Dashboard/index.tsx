import React from 'react'
import { Main } from './styles.ts'
import TitlePage from '../../Components/DashBoard/HomePage/TitlePage/index.tsx'
import TestUp from '../../Components/DashBoard/TestUp/index.tsx'
import InfoServerCard from '../../Components/Infoserver/index.tsx'

function Dashboard() {
  return (
    <>
      <Main>
        <TitlePage />
        <InfoServerCard />
        <TestUp />
      </Main>
    </>
  )
}

export default Dashboard
