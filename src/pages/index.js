import React, { useState } from 'react'
import MainLayout from 'layouts/MainLayout'
import GameLayout from 'layouts/GameLayout'
import SEO from 'components/SEO/SEO'
import Menu from 'steps/Menu/Menu'
import Options from 'steps/Options/Options'
import StepContext from 'context/StepContext'

const IndexPage = () => {
  const [activeStep, setActiveStep] = useState('menu')

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep }}>
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
    </StepContext.Provider>
  )
}

export default IndexPage
