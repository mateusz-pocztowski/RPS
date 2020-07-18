import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyle from 'theme/GlobalStyle'
import { theme as mainTheme } from 'theme/mainTheme'

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  z-index: -1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  padding: 10px 10px 30px;
  ${({ theme }) => theme.mq.md} {
    padding: 30px;
  }
`

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Background />
      <Content>{children}</Content>
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default MainLayout
