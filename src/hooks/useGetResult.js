import { useState, useEffect, useContext } from 'react'
import AppContext from 'context/AppContext'

const modes = {
  normal: ['rock', 'paper', 'scissors'],
  advanced: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
}

const useGetResult = () => {
  const [result, setResult] = useState(null)
  const [housePick, setHousePick] = useState(null)
  const {
    userPick,
    currentMode,
    setActiveStep,
    currentScore,
    setScore,
  } = useContext(AppContext)

  const handleClick = () => {
    setActiveStep('options')
  }

  useEffect(() => {
    const setDrawResult = () => {
      const AIPick =
        modes[currentMode][
          Math.floor(Math.random() * modes[currentMode].length)
        ]
      if (userPick === AIPick) {
        setResult('draw')
      } else if (
        (userPick === 'scissors' &&
          (AIPick === 'paper' || AIPick === 'lizard')) ||
        (userPick === 'paper' && (AIPick === 'rock' || AIPick === 'spock')) ||
        (userPick === 'rock' &&
          (AIPick === 'scissors' || AIPick === 'lizard')) ||
        (userPick === 'lizard' && (AIPick === 'spock' || AIPick === 'paper')) ||
        (userPick === 'spock' && (AIPick === 'scissors' || AIPick === 'rock'))
      ) {
        setResult('win')
        setScore(currentScore + 1)
      } else {
        setResult('lose')
        if (currentScore > 0) setScore(currentScore - 1)
      }
      setHousePick(AIPick)
    }
    setDrawResult()
  }, [])

  return { handleClick, result, housePick, userPick }
}

export default useGetResult
