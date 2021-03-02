import React, { useContext } from 'react'
import * as S from 'components/ExperienceBar/styles'
import { ChallengesContext } from 'contexts/ChallengesContext'

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <>
      <S.ContainerMain as="header">
        <span>0 XP</span>
        <S.BarGrey>
          <S.BarGreen percent={percentToNextLevel} />
          <S.CurrentExperience percent={percentToNextLevel}>
            {currentExperience} XP
          </S.CurrentExperience>
        </S.BarGrey>
        <span>{experienceToNextLevel} XP</span>
      </S.ContainerMain>
    </>
  )
}
