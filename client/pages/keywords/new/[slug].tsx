import { useRouter } from 'next/router'
import { useEffect } from 'react'

function NewKeywordPage() {
  const router = useRouter()

  useEffect(() => {
    router.push(
      (router?.query?.slug?.length as number) < 4
        ? `/subscribe/premium?hastag=${router.query.slug}`
        : `/subscribe?hastag=${router.query.slug}`
    )
  }, [])
  return <div>NewKeywordPage</div>
}

export default NewKeywordPage
