import React, { useState } from 'react'
import MainLayout from 'layouts/MainLayout'
import GameLayout from 'layouts/GameLayout'
import SEO from 'components/SEO/SEO'
import Menu from 'steps/Menu/Menu'
import Options from 'steps/Options/Options'
import AppContext from 'context/AppContext'

const IndexPage = () => {
  const [activeStep, setActiveStep] = useState('menu')
  const [mode, setMode] = useState(null)

  const value = {
    activeStep,
    setActiveStep,
    mode,
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
            {activeStep === 'optionChoose' && <Options />}
          </GameLayout>
        )}
      </MainLayout>
    </AppContext.Provider>
  )
}

export default IndexPage
