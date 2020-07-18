import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from 'context/AppContext'
import rulesImg from 'icons/image-rules.svg'
import rules2Img from 'icons/image-rules-bonus.svg'

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.white};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.score};
`

const Image = styled.img``

const Rules = () => {
  const { mode } = useContext(AppContext)

  return (
    <Wrapper>
      <Title>Rules</Title>
      <Image src={mode === 'advanced' ? rules2Img : rulesImg} />
    </Wrapper>
  )
}

export default Rules
