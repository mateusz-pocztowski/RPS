import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppContext from 'context/AppContext'
import Rules from 'components/Rules/Rules'
import Header from 'components/Header/Header'
import Button from 'components/Button/Button'

const Content = styled.main`
  padding: 60px 0;
  ${({ theme }) => theme.mq.md} {
    padding: 100px 0;
  }
`

const ButtonWrapper = styled.div`
  margin-top: auto;
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

  const showRules = () => {
    setRulesVisibility(true)
  }

  const hideRules = () => {
    setRulesVisibility(false)
  }

  return (
    <>
      <Header />
      <Content>{children}</Content>
      <ButtonWrapper>
        <Button onClick={handleChangeMode}>Change mode</Button>
        <Button onClick={showRules}>Rules</Button>
      </ButtonWrapper>
      <Rules isVisible={areRulesVisible} close={hideRules} />
    </>
  )
}

GameLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default GameLayout
