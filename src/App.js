import React from 'react'
import { Main } from './styles.ts'
import { TitlePage } from './Components/HomePage/TitlePage/index.tsx'
import { TestUp } from './Components/TestUp/index.tsx'

function App() {
  return (
    <>
      <Main>
        <TitlePage />
        <TestUp />
      </Main>
    </>
  )
}
export default App
