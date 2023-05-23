import {
  ButtonStyleDesktop,
  HeaderLayoutDesktop,
  MainContainerDesktop,
  ThreeOptionDesktop,
} from './Components'

import dynamic from 'next/dynamic'

const LayoutDesktop = dynamic(() => import('./Components/Layout'), {
  ssr: false,
})

const IllustrationDesktop = () => {
  return (
    <>
      <LayoutDesktop>
        {/* header Layout */}
        <HeaderLayoutDesktop />
        {/* main container */}
        <MainContainerDesktop />
        {/* three option */}
        <ThreeOptionDesktop />
        {/* button */}
        {/* <ButtonStyleDesktop /> */}
      </LayoutDesktop>
    </>
  )
}

export default IllustrationDesktop
