import React from 'react'
import styled from 'styled-components'
import Button from 'components/Button/Button'
import LogoImg from 'icons/logo.svg'

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

const LogoWrapper = styled.div`
  width: 120px;
`

const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
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

const Menu = () => (
  <>
    <LogoWrapper>
      <Logo src={LogoImg} alt="logo" />
    </LogoWrapper>
    <Wrapper>
      <Title>Choose Mode</Title>
      <ButtonWrapper>
        <Button secondary>Normal</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button secondary>Advanced</Button>
      </ButtonWrapper>
    </Wrapper>
  </>
)

export default Menu
