import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const KeywordContext = createContext<any>({})

export const KeywordProvider = ({ children }: any) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const router = useRouter()
  const [values, setValues] = useState({
    hashtag: '',
    sublinks: '',
  })
  const [swiperSelectedtedKeyword, setSwiperSelectedtedKeyword] =
    useState<any>('')
  const [isSearching, setIsSearching] = useState(false)
  const [sortedKeywords, setSortedKeywords] = useState<string[]>([])
  const [keywordFound, setKeywordFound] = useState(false)
  const [keywords, setKeywords] = useState<any>({})
  const [selectedKeyword, setSelectedKeyword] = useState<any>(null)
  const [token, setToken] = useState('')
  const [subscriptions, setSubscriptions] = useState<any>({})
  const [analyticsData, setAnalyticsData] = useState({
    totalVisits: 0,
    totalVisitsToday: 0,
    totalDailyVisitsByHoursOfTheDay: [],
    totalVisitsByMonthsOfTheYear: [],
    totalVisitsByDaysOfTheWeek: [],
    totalVisitsByDaysOfTheMonth: [],
  })

  const [foundKeyword, setFoundKeyword] = useState({})

  const [lineChartDataType, setLineChartDataType] = useState<
    'day' | 'week' | 'month' | 'year'
  >('day')

  const handleCheckKeyword = async (keyword: string) => {
    try {
      setIsSearching(true)
      const response = await fetch(
        `${apiUrl}/keywords/letters?letters=${keyword}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      if (!response.ok) {
        throw new Error('Error fetching data')
      }

      setFoundKeyword(data)
      setKeywordFound(true)
      setIsSearching(false)
    } catch (error) {
      setKeywordFound(false)
      setIsSearching(false)
    } finally {
      setIsSearching(false)
    }
  }

  const handleSubscription = async (
    letters: string,
    sublink: string,
    interval?: string
  ) => {
    try {
      if (token.length <= 0 || token === null || token === undefined) {
        router.push(
          `/login?redirect=subscribe&hashtag=${letters}&sublink=${sublink}`
        )
        return
      }
      const response = await fetch(`${apiUrl}/payment/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ letters, sublink, interval }),
      })
      if (!response.ok) {
        throw new Error()
      }
      const data = await response.json()
      window.location.href = data.url
    } catch (error) {
      toast.error('Error subscribing to keyword')
    }
  }

  const handleUnsubscribe = async (id: string) => {
    try {
      const response = await fetch(`${apiUrl}/payment/unsubscribe`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        throw new Error('Error fetching data')
      }
      toast.success('Unsubscribed successfully')
      getUsersKeywords()
    } catch (error) {
      toast.error('Error unsubscribing')
    }
  }

  const getUsersKeywords = async (page?: number) => {
    try {
      const response = await fetch(`${apiUrl}/keywords?page=${page}&limit=10`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!response.ok) {
        throw new Error('Error fetching data')
      }

      const data = await response.json()
      if (data.data.length <= 0) {
        return
      }
      if (page === 1) {
        setKeywords(data)
      }
      if (selectedKeyword === null) {
        setSelectedKeyword(keywords?.data[0])
      }
      setKeywords({
        ...keywords,
        data: [...keywords.data, ...data.data],
        hasNextPage: data.hasNextPage,
      })
    } catch (error) {
      console.error('Error fetching keywords')
    }
  }

  const getUserSubscriptions = async (page: number) => {
    try {
      const response = await fetch(
        `${apiUrl}/subscriptions?page=${page}&limit=10`,
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      if (!response.ok) {
        throw new Error('Error fetching data')
      }
      const data = await response.json()
      if (data.data.length <= 0) {
        return
      }
      if (page === 1) {
        setSubscriptions(data)
        return
      }
      setSubscriptions({
        ...subscriptions,
        data: [...subscriptions.data, ...data.data],
        hasNextPage: data.hasNextPage,
      })
    } catch (error) {
      console.error('Error fetching subscriptions')
    }
  }

  const checkPremiumKeyword = async () => {
    const response = await fetch(`${apiUrl}/keywords/check/premium`, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error('Error fetching data')
    }

    const data = await response.json()
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const filteredAlphabets = alphabets.filter(
      (alphabet) => !data.some((item: any) => item.slug === alphabet)
    )
    setSortedKeywords(filteredAlphabets)
    setSwiperSelectedtedKeyword(filteredAlphabets[0])
  }

  const updateKeywordDetails = async (id: number, values: any) => {
    try {
      const response = await fetch(`${apiUrl}/keywords/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      })
      if (!response.ok) {
        throw new Error('Error fetching data')
      }
      const data = await response.json()
      toast.success('Keyword updated successfully')
      getUsersKeywords()
    } catch (error) {
      toast.error('Error updating keyword')
    }
  }

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken)
    }
  }, [keywordFound])
  return (
    <KeywordContext.Provider
      value={{
        values,
        setValues,
        handleCheckKeyword,
        keywordFound,
        token,
        handleSubscription,
        getUsersKeywords,
        getUserSubscriptions,
        subscriptions,
        keywords,
        selectedKeyword,
        setSelectedKeyword,
        updateKeywordDetails,
        analyticsData,
        lineChartDataType,
        setLineChartDataType,
        isSearching,
        checkPremiumKeyword,
        sortedKeywords,
        setAnalyticsData,
        foundKeyword,
        swiperSelectedtedKeyword,
        setSwiperSelectedtedKeyword,
        handleUnsubscribe,
      }}
    >
      {children}
    </KeywordContext.Provider>
  )
}
