import React, { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from 'api/challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from 'components/LevelUpModal'

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
  closeLEvelUpModal: () => void
  setActiveChallenge: any
  activeChallenge: {
    type: string
    description: string
    amount: number
  }
}

interface ChallengesProviderProps {
  children: ReactNode
  cookiesGet: {
    level: number
    currentExperience: number
    challengesCompleted: number
  }
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export const ChallengesProvider = ({
  children,
  cookiesGet
}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(cookiesGet.level || 1)
  const [currentExperience, setCurrentExperience] = useState(
    cookiesGet.currentExperience || 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    cookiesGet.challengesCompleted || 0
  )
  const baseObject = {
    type: '',
    description: '',
    amount: 0
  }
  const [activeChallenge, setActiveChallenge] = useState(baseObject)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    if (typeof Notification !== 'undefined') {
      Notification.requestPermission().then()
    }
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  const levelUp = () => {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  const closeLEvelUpModal = () => {
    setIsLevelUpModalOpen(false)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    const audio = new Audio('audio/notification.mp3')
    audio?.play()

    let notification
    if (Notification.permission === 'granted') {
      notification = new Notification('Novo Desafio! 🎉', {
        body: `Valendo ${challenge.amount} xp!`
      })
    } else {
      return notification
    }
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
        setActiveChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLEvelUpModal
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
