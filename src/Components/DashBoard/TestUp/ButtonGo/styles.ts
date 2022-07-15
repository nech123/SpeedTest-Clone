import styled from 'styled-components'

export const Container = styled.div`
  width: 40%;
  height: 320px;
  display: flex;
  flex-direction: row;
  margin-left: 470px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    width: 40%;
    height: 200px;
    margin-left: 190px;
  }
`
