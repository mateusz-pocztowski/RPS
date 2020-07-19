import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Rules from 'components/Rules/Rules'
import Header from 'components/Header/Header'
import Button from 'components/Button/Button'
import AppContext from 'context/AppContext'
import { motion } from 'framer-motion'

const Content = styled.main`
  padding: 60px 0;
  ${({ theme }) => theme.mq.xs} {
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
  ${({ theme }) => theme.mq.xs} {
    justify-content: space-between;
    flex-direction: row;
  }
`

const GameLayout = ({ children }) => {
  const [areRulesVisible, setRulesVisibility] = useState(false)
  const { clear } = useContext(AppContext)

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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button onClick={clear}>Change mode</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button onClick={showRules}>Rules</Button>
        </motion.div>
      </ButtonWrapper>
      <Rules isVisible={areRulesVisible} close={hideRules} />
    </>
  )
}

GameLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default GameLayout
