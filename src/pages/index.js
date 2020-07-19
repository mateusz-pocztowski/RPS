import React, { useReducer } from 'react'
import MainLayout from 'layouts/MainLayout'
import GameLayout from 'layouts/GameLayout'
import SEO from 'components/SEO/SEO'
import Menu from 'steps/Menu/Menu'
import Options from 'steps/Options/Options'
import Result from 'steps/Result/Result'
import AppContext from 'context/AppContext'
import { rootReducer, initialState } from 'store'

const IndexPage = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const { activeStep, currentMode, currentScore, userPick } = state

  const value = {
    activeStep,
    currentMode,
    currentScore,
    userPick,
    setMode: mode => dispatch({ type: 'MODE', payload: mode }),
    setActiveStep: step => dispatch({ type: 'STEP', payload: step }),
    setUserPick: pick => dispatch({ type: 'USER_PICK', payload: pick }),
    setScore: score => dispatch({ type: 'SCORE', payload: score }),
    clear: () => dispatch({ type: 'CLEAR' }),
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
