import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

interface CountdownContextData {
  minutes: number
  seconds: number
  isActive: boolean
  hasFinished: boolean
  startCountDown: () => void
  resetCountDown: () => void
  time?: number
  setTime: (time: number) => void
  setHasFinished: (hasFinished: boolean) => void
}

interface CountdownProviderProps {
  children: ReactNode
}

let countdownTimeout: ReturnType<typeof setTimeout>

export const CountdownContext = createContext({} as CountdownContextData)

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountDown = () => {
    setIsActive(true)
  }

  const resetCountDown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(0.05 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, startNewChallenge, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountDown,
        resetCountDown,
        setTime,
        setHasFinished
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
