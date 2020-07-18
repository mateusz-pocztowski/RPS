import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import scissorsIcon from 'icons/icon-scissors.svg'
import paperIcon from 'icons/icon-paper.svg'
import rockIcon from 'icons/icon-rock.svg'
import spockIcon from 'icons/icon-spock.svg'
import lizardIcon from 'icons/icon-lizard.svg'

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mq.s} {
    width: 100px;
    height: 100px;
  }
  ${({ theme }) => theme.mq.md} {
    width: 120px;
    height: 120px;
  }
`

const Icon = styled.i`
  display: block;
  width: 100%;
  height: 100%;
  background: no-repeat center;
  background-size: 50%;
`

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: rotate(-20deg) scale(1.1)
  }
  &:active {
    transform: scale(1.05)
  }
  ${({ theme }) => theme.mq.s} {
    width: 125px;
    height: 125px;
  }
  ${({ theme }) => theme.mq.md} {
  width: 150px;
  height: 150px;
  }
  ${({ type }) =>
    type === 'scissors' &&
    css`
      background: ${({ theme }) => theme.scissors};
      & > ${Content} ${Icon} {
        background-image: url(${scissorsIcon});
      }
    `}
  ${({ type }) =>
    type === 'paper' &&
    css`
      background: ${({ theme }) => theme.paper};
      & > ${Content} ${Icon} {
        background-image: url(${paperIcon});
      }
    `}
  ${({ type }) =>
    type === 'rock' &&
    css`
      background: ${({ theme }) => theme.rock};
      & > ${Content} ${Icon} {
        background-image: url(${rockIcon});
      }
    `}
  ${({ type }) =>
    type === 'spock' &&
    css`
      background: ${({ theme }) => theme.spock};
      & > ${Content} ${Icon} {
        background-image: url(${spockIcon});
      }
    `}
  ${({ type }) =>
    type === 'lizard' &&
    css`
      background: ${({ theme }) => theme.lizard};
      & > ${Content} ${Icon} {
        background-image: url(${lizardIcon});
      }
    `}
`

const Option = ({ type }) => (
  <Wrapper type={type}>
    <Content>
      <Icon />
    </Content>
  </Wrapper>
)

Option.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Option
