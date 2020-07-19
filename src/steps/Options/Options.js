import React, { useContext } from 'react'
import AppContext from 'context/AppContext'
import styled, { css } from 'styled-components'
import Option from 'steps/Options/Option'
import TriangleBg from 'icons/bg-triangle.svg'
import PentagonBg from 'icons/bg-pentagon.svg'
import { motion } from 'framer-motion'

const OptionWrapper = styled(motion.div)`
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

const Wrapper = styled(motion.div)`
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
          left: 200px;
          ${({ theme }) => theme.mq.s} {
            left: 250px;
            bottom: -40px;
          }
          ${({ theme }) => theme.mq.md} {
            left: 330px;
          }
        }
        &:nth-child(4) {
          bottom: -20px;
          left: 20px;
          ${({ theme }) => theme.mq.s} {
            bottom: -40px;
          }
        }
        &:nth-child(5) {
          top: 38%;
          left: -18px;
          transform: translateY(-50%);
          ${({ theme }) => theme.mq.s} {
            left: -50px;
          }
        }
      }
    `}
`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.35,
    },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
}

const Options = () => {
  const { currentMode } = useContext(AppContext)

  return (
    <>
      {currentMode === 'advanced' ? (
        <Wrapper
          type="pentagon"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <OptionWrapper>
            <motion.div variants={item}>
              <Option type="scissors" />
            </motion.div>
          </OptionWrapper>
          <OptionWrapper>
            <motion.div variants={item}>
              <Option type="paper" />
            </motion.div>
          </OptionWrapper>
          <OptionWrapper>
            <motion.div variants={item}>
              <Option type="lizard" />
            </motion.div>
          </OptionWrapper>
          <OptionWrapper>
            <motion.div variants={item}>
              <Option type="spock" />
            </motion.div>
          </OptionWrapper>
          <OptionWrapper>
            <motion.div variants={item}>
              <Option type="rock" />
            </motion.div>
          </OptionWrapper>
        </Wrapper>
      ) : (
        <Wrapper variants={container} initial="hidden" animate="show">
          <OptionWrapper>
            <motion.div variants={item}>
              <Option type="paper" />
            </motion.div>
          </OptionWrapper>
          <OptionWrapper>
            <motion.div variants={item}>
              <Option type="scissors" />
            </motion.div>
          </OptionWrapper>
          <OptionWrapper>
            <motion.div variants={item}>
              <Option type="rock" />
            </motion.div>
          </OptionWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default Options
