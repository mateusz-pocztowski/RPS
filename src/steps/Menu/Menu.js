import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from 'components/Button/Button'
import Logo from 'components/Logo/Logo'
import AppContext from 'context/AppContext'
import { motion } from 'framer-motion'

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const InnerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
  margin: 10px 0;
`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.35,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
}

const Menu = () => {
  const { setMode, setActiveStep } = useContext(AppContext)

  const handleOption = type => {
    setActiveStep('options')
    setMode(type)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Logo />
      </motion.div>
      <Wrapper>
        <InnerWrapper
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div variants={item}>
            <Title>Choose Mode</Title>
          </motion.div>
          <motion.div variants={item}>
            <ButtonWrapper>
              <Button onClick={() => handleOption('normal')} secondary>
                Normal
              </Button>
            </ButtonWrapper>
          </motion.div>
          <motion.div variants={item}>
            <ButtonWrapper>
              <Button secondary onClick={() => handleOption('advanced')}>
                Advanced
              </Button>
            </ButtonWrapper>
          </motion.div>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default Menu
