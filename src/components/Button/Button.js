import styled, { css } from 'styled-components'

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 8px 30px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.white};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      width: 220px;
      padding: 14px;
      color: ${({ theme }) => theme.dark};
      background-color: ${({ theme }) => theme.white};
      &:hover {
        color: ${({ theme }) => theme.white};
        background-color: transparent;
      }
    `}
`

export default Button
