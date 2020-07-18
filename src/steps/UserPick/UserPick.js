import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import AppContext from 'context/AppContext'
import Option from 'steps/Options/Option'
import Button from 'components/Button/Button'

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ theme }) => theme.mq.xs} {
    justify-content: space-evenly;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ResultWrapper = styled(InnerWrapper)`
  margin-top: 10px;
  flex-basis: 100%;
  order: 2;
  ${({ theme }) => theme.mq.xs} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mq.md} {
    margin: 0 40px;
    flex-basis: auto;
    order: 0;
  }
`

const Result = styled.h2`
  margin: 15px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
`

const Name = styled.h3`
  margin: 20px 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mq.xs} {
    order: -1;
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSize.ml};
  }
  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

const modes = {
  normal: ['rock', 'paper', 'scissors'],
  advanced: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
}

const UserPick = () => {
  const [result, setResult] = useState(null)
  const [housePick, setHousePick] = useState(null)
  const { userPick, mode, setActiveStep, score, setScore } = useContext(
    AppContext
  )

  useEffect(() => {
    const setDrawResult = () => {
      const AIPick = modes[mode][Math.floor(Math.random() * modes[mode].length)]
      if (userPick === AIPick) {
        setResult('draw')
      } else if (
        (userPick === 'scissors' &&
          (AIPick === 'paper' || AIPick === 'lizard')) ||
        (userPick === 'paper' && (AIPick === 'rock' || AIPick === 'spock')) ||
        (userPick === 'rock' &&
          (AIPick === 'scissors' || AIPick === 'lizard')) ||
        (userPick === 'lizard' && (AIPick === 'spock' || AIPick === 'paper')) ||
        (userPick === 'spock' && (AIPick === 'scissors' || AIPick === 'rock'))
      ) {
        setResult('win')
        setScore(score + 1)
      } else {
        setResult('lose')
        if (score > 0) setScore(score - 1)
      }
      setHousePick(AIPick)
    }
    setDrawResult()
  }, [])

  return (
    <Wrapper>
      <InnerWrapper>
        <Option medium type={userPick} />
        <Name>You picked</Name>
      </InnerWrapper>
      <ResultWrapper>
        <Result>{result}</Result>
        <Button onClick={() => setActiveStep('options')} secondary>
          Play again
        </Button>
      </ResultWrapper>
      <InnerWrapper>
        <Option medium type={housePick} />
        <Name>The house picked</Name>
      </InnerWrapper>
    </Wrapper>
  )
}

export default UserPick
