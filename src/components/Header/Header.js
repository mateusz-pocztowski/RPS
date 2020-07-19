import React, { useContext } from 'react'
import styled from 'styled-components'
import Logo from 'components/Logo/Logo'
import AppContext from 'context/AppContext'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.gray};
  padding: 12px;
  border-radius: 8px;
`

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;
`

const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.score};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Score = styled.span`
  color: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
`

const Header = () => {
  const { currentScore } = useContext(AppContext)
  return (
    <Wrapper>
      <Logo />
      <ScoreWrapper>
        <Title>Score</Title>
        <Score>{currentScore}</Score>
      </ScoreWrapper>
    </Wrapper>
  )
}

export default Header
