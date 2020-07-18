import React, { useState } from 'react'
import MainLayout from 'layouts/MainLayout'
import GameLayout from 'layouts/GameLayout'
import SEO from 'components/SEO/SEO'
import Menu from 'steps/Menu/Menu'
import Options from 'steps/Options/Options'
import UserPick from 'steps/UserPick/UserPick'
import AppContext from 'context/AppContext'

const IndexPage = () => {
  const [activeStep, setActiveStep] = useState('menu')
  const [userPick, setUserPick] = useState(null)
  const [mode, setMode] = useState(null)
  const [score, setScore] = useState(0)

  const value = {
    activeStep,
    setActiveStep,
    userPick,
    setUserPick,
    mode,
    score,
    setScore,
    setMode,
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
            {activeStep === 'userPick' && <UserPick />}
          </GameLayout>
        )}
      </MainLayout>
    </AppContext.Provider>
  )
}

export default IndexPage
