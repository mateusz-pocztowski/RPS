import React, { useEffect, useReducer } from 'react'
import MainLayout from 'layouts/MainLayout'
import GameLayout from 'layouts/GameLayout'
import SEO from 'components/SEO/SEO'
import Menu from 'steps/Menu/Menu'
import Options from 'steps/Options/Options'
import Result from 'steps/Result/Result'
import AppContext from 'context/AppContext'
import { rootReducer, initialValues } from 'store'

const IndexPage = () => {
  const [state, dispatch] = useReducer(rootReducer, initialValues)
  const { activeStep, currentMode, currentScore, userPick } = state

  const handleDispatch = (type, payload = null) => {
    dispatch({ type, payload })
  }

  useEffect(() => {
    const persistedState = localStorage.getItem('rpsState')
      ? JSON.parse(localStorage.getItem('rpsState'))
      : initialValues
    handleDispatch('SET_INITIAL_STATE', persistedState)
  }, [])

  const value = {
    activeStep,
    currentMode,
    currentScore,
    userPick,
    setMode: mode => handleDispatch('MODE', mode),
    setActiveStep: step => handleDispatch('STEP', step),
    setUserPick: pick => handleDispatch('USER_PICK', pick),
    setScore: score => handleDispatch('SCORE', score),
    clear: () => handleDispatch('CLEAR'),
  }

  return (
    <AppContext.Provider value={value}>
      <MainLayout>
        <SEO title="Home" />
        {activeStep === 'menu' ? (
          <Menu />
        ) : (
          <GameLayout>
            {activeStep === 'options' && <Options />}
            {activeStep === 'result' && <Result />}
          </GameLayout>
        )}
      </MainLayout>
    </AppContext.Provider>
  )
}

export default IndexPage
