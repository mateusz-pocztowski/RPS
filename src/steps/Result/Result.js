import React from 'react'
import styled from 'styled-components'
import Option from 'steps/Options/Option'
import Button from 'components/Button/Button'
import useGetResult from 'hooks/useGetResult'

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

const Title = styled.h2`
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

const Result = () => {
  const { result, userPick, handleClick, housePick } = useGetResult()

  return (
    <Wrapper>
      <InnerWrapper>
        <Option medium type={userPick} />
        <Name>You picked</Name>
      </InnerWrapper>
      <ResultWrapper>
        <Title>{result}</Title>
        <Button onClick={handleClick} secondary>
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

export default Result
