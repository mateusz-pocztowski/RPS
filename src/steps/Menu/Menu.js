import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from 'components/Button/Button'
import Logo from 'components/Logo/Logo'
import AppContext from 'context/AppContext'

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const Menu = () => {
  const { setMode, setActiveStep } = useContext(AppContext)

  const handleOption = type => {
    setActiveStep('optionChoose')
    setMode(type)
  }

  return (
    <>
      <Logo />
      <Wrapper>
        <Title>Choose Mode</Title>
        <ButtonWrapper>
          <Button onClick={() => handleOption('normal')} secondary>
            Normal
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button secondary onClick={() => handleOption('advanced')}>
            Advanced
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  )
}

export default Menu
