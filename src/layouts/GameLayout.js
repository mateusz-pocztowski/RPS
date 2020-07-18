import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import Button from 'components/Button/Button'

const Content = styled.main`
  padding: 100px 0 50px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mq.md} {
    justify-content: flex-end;
  }
`

const GameLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <ButtonWrapper>
        <Button>Rules</Button>
      </ButtonWrapper>
    </>
  )
}

GameLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default GameLayout
