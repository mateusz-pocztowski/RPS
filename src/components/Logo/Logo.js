import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from 'context/AppContext'
import logoImg from 'icons/logo.svg'
import logo2Img from 'icons/logo-bonus.svg'

const Wrapper = styled.div`
  max-width: 120px;
  height: ${({ isAdvanced }) => (isAdvanced ? '100px' : '75px')};
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const Logo = () => {
  const { currentMode } = useContext(AppContext)
  return (
    <Wrapper isAdvanced={currentMode === 'advanced'}>
      <Image src={currentMode === 'advanced' ? logo2Img : logoImg} alt="logo" />
    </Wrapper>
  )
}

export default Logo
