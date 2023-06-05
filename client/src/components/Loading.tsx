import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

interface DelayedLoadingProps {
  delay: number // الوقت المطلوب للتأخير بالميلي ثانية
}

const DelayedLoading: React.FC<DelayedLoadingProps> = ({ delay }) => {
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay])

  if (showLoading) {
    return <CircularProgress />
  }

  return null
}

export default DelayedLoading
