import React from 'react'
import styled from 'styled-components'
import Option from 'steps/Options/Option'
import Button from 'components/Button/Button'
import useGetResult from 'hooks/useGetResult'
import { motion } from 'framer-motion'

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

const ResultWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const Placeholder = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    transition: 0.3s ease;
    transition-delay: 0.3s;
    z-index: -1;
    ${({ theme }) => theme.mq.md} {
      width: 300px;
      height: 300px;
    }
  }
  &:after {
    transition-delay: 0.45s;
    width: 300px;
    height: 300px;
    ${({ theme }) => theme.mq.md} {
      width: 450px;
      height: 450px;
    }
  }
`

const Title = styled.h2`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
`

const NameWrapper = styled(motion.div)`
  margin: 20px 0;
  ${({ theme }) => theme.mq.xs} {
    order: -1;
    margin-bottom: 40px;
  }
`

const Name = styled.h3`
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mq.xs} {
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
        <Placeholder isActive={result === 'win'}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Option medium type={userPick} />
          </motion.div>
        </Placeholder>
        <NameWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Name>You picked</Name>
        </NameWrapper>
      </InnerWrapper>
      <ResultWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 2 }}
      >
        <Title>{result === 'draw' ? result : `You ${result}`}</Title>
        <Button onClick={handleClick} secondary>
          Play again
        </Button>
      </ResultWrapper>
      <InnerWrapper>
        <Placeholder isActive={result === 'lose'}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            <Option medium type={housePick} />
          </motion.div>
        </Placeholder>
        <NameWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <Name>The house picked</Name>
        </NameWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Result
