import React, { useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppContext from 'context/AppContext'
import useOutsideClick from 'hooks/useOutsideClick'
import closeIcon from 'icons/icon-close.svg'
import rulesImg from 'icons/image-rules.svg'
import rules2Img from 'icons/image-rules-bonus.svg'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: 0.3s;
`

const Wrapper = styled.div`
  position: relative;
  padding: 50px 20px;
  border-radius: 8px;
  box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.4);
  margin: 10px;
  background-color: ${({ theme }) => theme.white};
`

const TitleWrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.score};
  text-transform: uppercase;
`

const CloseBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  background: url(${closeIcon}) no-repeat center;
  background-size: 100%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    filter: brightness(300%);
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const Rules = ({ isVisible, close }) => {
  const { mode } = useContext(AppContext)
  const modalRef = useRef(null)

  useOutsideClick(modalRef, close)

  return (
    <Overlay isVisible={isVisible}>
      <Wrapper ref={modalRef}>
        <CloseBtn onClick={close} />
        <TitleWrapper>
          <Title>Rules</Title>
        </TitleWrapper>
        <Image src={mode === 'advanced' ? rules2Img : rulesImg} alt="rules" />
      </Wrapper>
    </Overlay>
  )
}

Rules.propTypes = {
  close: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
}

export default Rules
