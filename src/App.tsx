import React from 'react'
import { Index } from '@/components/ExperienceBar'
import GlobalStyles from '@/styles/GlobalStyles'
import { C } from '@/theme'

function App() {
  return (
    <>
      <C.Container>
        <Index />
      </C.Container>
      <GlobalStyles />
    </>
  )
}

export default App
