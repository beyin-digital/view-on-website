import {
  ButtonStyle,
  HeaderLayout,
  MainContainer,
  ThreeOption,
} from './Components'

import dynamic from 'next/dynamic'

const LayoutMobile = dynamic(() => import('./Components/Layout'), {
  ssr: false,
})

const IllustrationMobile = () => {
  return (
    <>
      <LayoutMobile>
        {/* header Page */}
        <HeaderLayout />
        {/* Main Box Pic */}
        <MainContainer />
        {/* Three Option */}
        <ThreeOption />
        {/* Buttom */}
        <ButtonStyle />
      </LayoutMobile>
    </>
  )
}

export default IllustrationMobile
