import React from 'react'
import * as S from 'components/ExperienceBar/styles'

export const ExperienceBar = () => {
  return (
    <>
      <S.ContainerMain as={'header'}>
        <span>0 XP</span>
        <S.BarGrey>
          <S.BarGreen percent={30} />
          <S.CurrentExperience percent={30}>30 XP</S.CurrentExperience>
        </S.BarGrey>
        <span>200 XP</span>
      </S.ContainerMain>
    </>
  )
}
