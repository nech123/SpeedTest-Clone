import React from 'react'
import { Container } from './styles.ts'
import './styles.css'

function ButtonGo() {
  return (
    <Container>
      <div className="firstBorder">
        <div className="secondBorder">
          <button className="btnStart" type="submit">
            GO
          </button>
        </div>
      </div>
    </Container>
  )
}

export { ButtonGo }
