import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppContext from 'context/AppContext'
import Rules from 'components/Rules/Rules'
import Header from 'components/Header/Header'
import Button from 'components/Button/Button'

const Content = styled.main`
  padding: 100px 0 50px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.mq.s} {
    justify-content: space-between;
    flex-direction: row;
  }
`

const GameLayout = ({ children }) => {
  const [areRulesVisible, setRulesVisibility] = useState(false)
  const { setMode, setActiveStep } = useContext(AppContext)

  const handleChangeMode = () => {
    setMode(null)
    setActiveStep('menu')
  }

  const toggleRulesVisibility = () => {
    setRulesVisibility(!areRulesVisible)
  }

  return (
    <>
      <Header />
      <Content>{children}</Content>
      <ButtonWrapper>
        <Button onClick={handleChangeMode}>Change mode</Button>
        <Button onClick={toggleRulesVisibility}>Rules</Button>
      </ButtonWrapper>
      <Rules isVisible={areRulesVisible} close={toggleRulesVisibility} />
    </>
  )
}

GameLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default GameLayout
