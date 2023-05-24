import { api } from '@/utils/api'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import slugify from 'slugify'
import { array } from 'zod'
// create a context for the keyword
export const KeywordContext = createContext<{
  values: any
  setValues: React.Dispatch<React.SetStateAction<any>>
  checkKeywordavailability: (keyword: string) => void
  keywordFound?: string
  token?: string
  handleSubscription: (
    letters: string,
    sublink: string,
    price: number,
    interval: string
  ) => void
  getUsersKeywords: () => void
  getUserSubscriptions: () => void
  subscriptions: any[]
  keywords: any[]
  selectedKeyword: any
  setSelectedKeyword: React.Dispatch<React.SetStateAction<any>>
  getKeywordAnalytics: () => void
  updateKeywordDetails: (id: number, values: any) => void
  analyticsData: {
    totalVisitsToday: number
    totalVisitsAllTime: number
    lineChartData: any[]
  }
  setLineChartDataType: React.Dispatch<
    React.SetStateAction<'day' | 'week' | 'month' | 'year'>
  >
  lineChartDataType: string
}>({
  values: '',
  setValues: () => {},
  checkKeywordavailability: async (keyword: string) => {},
  keywordFound: '',
  token: '',
  handleSubscription: async (
    letters: string,
    sublink: string,
    price: number,
    interval: string
  ) => {},
  getUsersKeywords: async () => {},
  getUserSubscriptions: async () => {},
  subscriptions: [],
  keywords: [],
  selectedKeyword: {},
  setSelectedKeyword: () => {},
  getKeywordAnalytics: async () => {},
  updateKeywordDetails: async (id: number, values: any) => {},
  analyticsData: {
    totalVisitsToday: 0,
    totalVisitsAllTime: 0,
    lineChartData: [],
  },
  setLineChartDataType: () => {},
  lineChartDataType: '',
})

export const KeywordProvider = ({ children }: any) => {
  const router = useRouter()
  const [values, setValues] = useState({
    hashtag: '',
    sublinks: '',
  })

  const [keywordFound, setKeywordFound] = useState('')
  const [keywords, setKeywords] = useState([])
  const [selectedKeyword, setSelectedKeyword] = useState<any>({})
  const [token, setToken] = useState('')
  const [subscriptions, setSubscriptions] = useState([])
  const [analyticsData, setAnalyticsData] = useState({
    totalVisitsToday: 0,
    totalVisitsAllTime: 0,
    lineChartData: [{}],
  })
  const [lineChartDataType, setLineChartDataType] = useState<
    'day' | 'week' | 'month' | 'year'
  >('day')
  const checkKeywordavailability = async (keyword: string) => {
    // check if keyword is available
    const res = await api.get(`/keywords?hashtag=${keyword}`)
    const data = res.data

    if (data) {
      setKeywordFound(data.sublink)
      return
    }
    setKeywordFound('ViewOnWebsite.com')
  }

  const handleSubscription = async (
    letters: string,
    sublink: string,
    price: number,
    interval: string
  ) => {
    if (token === '') {
      router.push('/login')
      return
    }
    const res = await api.post(
      '/stripe/payment',
      { letters, sublink, price, interval },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    const data = res.data
    window.location.href = data.url
  }

  const getUsersKeywords = async () => {
    const res = await api.get('/keywords/all', {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = res.data
    setKeywords(data.data)

    setSelectedKeyword(data.data[0])
  }

  const getUserSubscriptions = async () => {
    const res = await api.get('/subscriptions', {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = res.data.data
    if (data.length > 0) {
      setSubscriptions(data)
    }
  }

  function sortAndCountVisits(
    arr: any[],
    timeParameter: 'day' | 'week' | 'month' | 'year'
  ): { x: string; y: number }[] {
    const visitsMap: Map<string, number> = new Map()

    arr.forEach((obj) => {
      const createdAt = new Date(obj.createdAt)
      let key: string

      switch (timeParameter) {
        case 'day':
          key = createdAt.toLocaleString(undefined, {
            hour: 'numeric',
            hour12: true,
          })
          break
        case 'week':
          key = createdAt.toLocaleDateString(undefined, { weekday: 'long' })
          break
        case 'month':
          key = createdAt.toLocaleDateString(undefined, { day: 'numeric' })
          break
        case 'year':
          key = createdAt.toLocaleDateString(undefined, { month: 'long' })
          break
        default:
          throw new Error('Invalid time parameter.')
      }

      visitsMap.set(key, (visitsMap.get(key) || 0) + 1)
    })

    const result: { x: string; y: number }[] = []

    switch (timeParameter) {
      case 'day':
        for (let i = 0; i < 24; i++) {
          const hour = i.toString().padStart(2, '0')
          const key = `${hour}:00`
          const visits = visitsMap.get(key) || 0
          result.push({ x: key, y: visits })
        }
        break
      case 'week':
        const weekdays = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ]
        weekdays.forEach((weekday) => {
          const visits = visitsMap.get(weekday) || 0
          result.push({ x: weekday, y: visits })
        })
        break
      case 'month':
        for (let i = 1; i <= 31; i++) {
          const day = i.toString().padStart(2, '0')
          const key = `${day}`
          const visits = visitsMap.get(key) || 0
          result.push({ x: key, y: visits })
        }
        break
      case 'year':
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]
        months.forEach((month, index) => {
          const visits = visitsMap.get(month) || 0
          result.push({ x: month, y: visits })
        })
        break
    }

    return result
  }

  const getKeywordAnalytics = async () => {
    const res = await api.get(
      `/analytics/keyword?keyword=${slugify(selectedKeyword?.letters, {
        lower: true,
      })}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    const data = res.data
    setAnalyticsData({
      ...analyticsData,
      totalVisitsToday: data?.filter(
        (keyword: { createdAt: string | number | Date }) =>
          new Date(keyword.createdAt).toLocaleDateString() ===
          new Date().toLocaleDateString()
      ).length,
      totalVisitsAllTime: data?.length,
      lineChartData: sortAndCountVisits(data, lineChartDataType),
    })
  }

  const updateKeywordDetails = async (id: number, values: any) => {
    try {
      const res = await api.put(
        `/keywords/${id}`,
        { ...values },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (res.status >= 400) {
        throw new Error()
      }

      toast.success('Keyword updated successfully')
      getUsersKeywords()
    } catch (error) {
      toast.error('Error updating keyword')
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token || '')
  }, [keywordFound, token])
  return (
    <KeywordContext.Provider
      value={{
        values,
        setValues,
        checkKeywordavailability,
        keywordFound,
        token,
        handleSubscription,
        getUsersKeywords,
        getUserSubscriptions,
        subscriptions,
        keywords,
        selectedKeyword,
        setSelectedKeyword,
        getKeywordAnalytics,
        updateKeywordDetails,
        analyticsData,
        lineChartDataType,
        setLineChartDataType,
      }}
    >
      {children}
    </KeywordContext.Provider>
  )
}
