import React from 'react'
import {
  DivBar,
  Results,
  IconResults,
  NameResults,
  Settings,
  IconSettings,
  NameSettings,
  DivWhite,
  DivControl,
  DivAd
} from './styles.ts'

function NavBar() {
  return (
    <DivBar>
      <DivWhite>Propaganda</DivWhite>
      <DivControl>
        <Results>
          <IconResults />
          <NameResults>RESULTS</NameResults>
        </Results>
        <Settings>
          <IconSettings />
          <NameSettings>SETTINGS</NameSettings>
        </Settings>
      </DivControl>{' '}
      <DivAd>Propaganda</DivAd>
    </DivBar>
  )
}

export { NavBar }
