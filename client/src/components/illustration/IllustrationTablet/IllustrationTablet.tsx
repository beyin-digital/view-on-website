import React from 'react'
import LayoutMobile from './Components/Layout'
import {
  ButtonStyleMobile,
  HeaderLayoutMobile,
  MainContainerMobile,
  ThreeOptionMobile,
} from './Components'

const IllustrationTablet = () => {
  return (
    <>
      <LayoutMobile>
        {/* Header Top */}
        <HeaderLayoutMobile />
        {/* Main Box */}
        <MainContainerMobile />
        {/* Three Option */}
        <ThreeOptionMobile />
        {/* Buttom */}
        <ButtonStyleMobile />
      </LayoutMobile>
    </>
  )
}

export default IllustrationTablet
