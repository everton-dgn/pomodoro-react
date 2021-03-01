import React, { createContext, ReactNode, useState } from 'react'
import challenges from 'api/challenges.json'

interface ChallengeContextData {
  level: number
  setLevel: React.Dispatch<React.SetStateAction<number>>
  currentExperience: number
  setCurrentExperience: React.Dispatch<React.SetStateAction<number>>
  challengesCompleted: number
  experienceToNextLevel: number
  setChallengesCompleted: React.Dispatch<React.SetStateAction<number>>
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  activeChallenge: {
    type: string
    description: string
    amount: number
  }
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const baseObject = {
    type: '',
    description: '',
    amount: 0
  }
  const [activeChallenge, setActiveChallenge] = useState(baseObject)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => {
    setLevel(level + 1)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
  }

  const resetChallenge = () => {
    setActiveChallenge(baseObject)
  }

  const completeChallenge = () => {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(baseObject)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        setLevel,
        currentExperience,
        setCurrentExperience,
        challengesCompleted,
        setChallengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
