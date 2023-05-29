import { useRouter } from 'next/router'
import DetailsFooter from './DetailsFooter'

const FooterLayout = ({ hashtag }: any) => {
  return (
    <>
      <DetailsFooter hashtag={hashtag} />
    </>
  )
}

export default FooterLayout
