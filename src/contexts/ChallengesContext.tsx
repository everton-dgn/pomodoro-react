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
  challengesComputed: number
  setChallengesComputed: React.Dispatch<React.SetStateAction<number>>
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
  const [challengesComputed, setChallengesComputed] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState<object | null>(null)

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
        challengesComputed,
        setChallengesComputed,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
