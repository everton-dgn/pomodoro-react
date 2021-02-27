import React, { createContext, ReactNode, useState } from 'react'
import challenges from 'api/challenges.json'

// interface Challenge {
//  type: 'body' | 'eye'
//  description: string
//  amount: number
// }

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
  activeChallenge: any
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState<object | null>(null)

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
    setActiveChallenge(null)
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
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
