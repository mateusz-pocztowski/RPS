import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from 'context/AppContext'
import logoImg from 'icons/logo.svg'
import logo2Img from 'icons/logo-bonus.svg'

const Wrapper = styled.div`
  width: 120px;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const Logo = () => {
  const { currentMode } = useContext(AppContext)
  return (
    <Wrapper>
      <Image src={currentMode === 'advanced' ? logo2Img : logoImg} alt="logo" />
    </Wrapper>
  )
}

export default Logo
