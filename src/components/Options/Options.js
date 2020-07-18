import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Option from 'components/Options/Option'
import TriangleBg from 'icons/bg-triangle.svg'
import PentagonBg from 'icons/bg-pentagon.svg'

const OptionWrapper = styled.div`
  position: absolute;
  &:nth-child(1) {
    top: -30px;
    left: -10px;
  }
  &:nth-child(2) {
    top: -30px;
    right: -10px;
  }
  &:nth-child(3) {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 270px;
  height: 270px;
  background: url(${TriangleBg}) no-repeat center;
  background-size: 100%;
  ${({ theme }) => theme.mq.s} {
    width: 320px;
    height: 320px;
  }
  ${({ theme }) => theme.mq.md} {
    width: 420px;
    height: 420px;
  }
  ${({ type }) =>
    type === 'pentagon' &&
    css`
      background-image: url(${PentagonBg});
      & > ${OptionWrapper} {
        &:nth-child(1) {
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          ${({ theme }) => theme.mq.s} {
            top: -50px;
          }
        }
        &:nth-child(2) {
          top: 38%;
          right: -18px;
          transform: translateY(-50%);
          ${({ theme }) => theme.mq.s} {
            right: -50px;
          }
        }
        &:nth-child(3) {
          bottom: -20px;
          left: 65px;
          ${({ theme }) => theme.mq.s} {
            left: 70px;
            bottom: -40px;
          }
        }
        &:nth-child(4) {
          top: 38%;
          left: -18px;
          transform: translateY(-50%);
          ${({ theme }) => theme.mq.s} {
            left: -50px;
          }
        }
        &:nth-child(5) {
          bottom: -20px;
          right: 12px;
          ${({ theme }) => theme.mq.s} {
            bottom: -40px;
          }
        }
      }
    `}
`

const Options = ({ mode }) => (
  <>
    {mode === 'advanced' ? (
      <Wrapper type="pentagon">
        <OptionWrapper>
          <Option type="rock" />
        </OptionWrapper>
        <OptionWrapper>
          <Option type="paper" />
        </OptionWrapper>
        <OptionWrapper>
          <Option type="scissors" />
        </OptionWrapper>
        <OptionWrapper>
          <Option type="lizard" />
        </OptionWrapper>
        <OptionWrapper>
          <Option type="spock" />
        </OptionWrapper>
      </Wrapper>
    ) : (
      <Wrapper>
        <OptionWrapper>
          <Option type="rock" />
        </OptionWrapper>
        <OptionWrapper>
          <Option type="paper" />
        </OptionWrapper>

        <OptionWrapper>
          <Option type="scissors" />
        </OptionWrapper>
      </Wrapper>
    )}
  </>
)

Options.propTypes = {
  mode: PropTypes.string,
}

Options.defaultProps = {
  mode: 'normal',
}

export default Options
