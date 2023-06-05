import {
  ButtonStyleMobile,
  HeaderLayoutMobile,
  MainContainerMobile,
  ThreeOptionMobile,
} from './Components'

import dynamic from 'next/dynamic'

const LayoutMobile = dynamic(() => import('./Components/Layout'), {
  ssr: false,
})

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
