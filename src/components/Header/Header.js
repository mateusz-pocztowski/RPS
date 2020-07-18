import React from 'react'
import styled from 'styled-components'
import logoImg from 'icons/logo.svg'
import logo2Img from 'icons/logo-bonus.svg'
import PropTypes from 'prop-types'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.gray};
  padding: 12px;
  border-radius: 8px;
`

const LogoWrapper = styled.div`
  width: 120px;
`

const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;
`

const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.score};
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Score = styled.span`
  color: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
`

const Header = ({ type }) => (
  <Wrapper>
    <LogoWrapper>
      <Logo src={type === 'advanced' ? logo2Img : logoImg} alt="logo" />
    </LogoWrapper>
    <ScoreWrapper>
      <Title>Score</Title>
      <Score>12</Score>
    </ScoreWrapper>
  </Wrapper>
)

Header.propTypes = {
  type: PropTypes.string,
}

Header.defaultProps = {
  type: 'normal',
}

export default Header
