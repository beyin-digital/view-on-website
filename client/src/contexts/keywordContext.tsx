import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
// create a context for the keyword
export const KeywordContext = createContext<any>({})

export const KeywordProvider = ({ children }: any) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const router = useRouter()
  const [values, setValues] = useState({
    hashtag: '',
    sublinks: '',
  })

  const [isSearching, setIsSearching] = useState(false)
  const [premiumKeywords, setPremiumKeywords] = useState<any>([])
  const [sortedKeywords, setSortedKeywords] = useState<string[]>([])
  const [keywordFound, setKeywordFound] = useState(false)
  const [keywords, setKeywords] = useState([])
  const [selectedKeyword, setSelectedKeyword] = useState<any>(null)
  const [token, setToken] = useState('')
  const [subscriptions, setSubscriptions] = useState([])
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
    // check if keyword is available
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
      if (token === '' || token === null) {
        router.push('/login')
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
      const data = await response.json()
      toast.success('Unsubscribed successfully')
      getUsersKeywords()
    } catch (error) {
      toast.error('Error unsubscribing')
    }
  }

  const getUsersKeywords = async () => {
    try {
      if (token !== '') {
        const response = await fetch(`${apiUrl}/keywords?page=1&limit=10`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!response.ok) {
          throw new Error('Error fetching data')
        }

        const { data } = await response.json()
        console.log(data)
        setKeywords(data)
        if (selectedKeyword === null) {
          setSelectedKeyword(data[0])
        }
      }
    } catch (error) {
      toast.error('Error fetching keywords')
    }
  }

  const getUserSubscriptions = async () => {
    try {
      if (token !== '') {
        const response = await fetch(
          `${apiUrl}/subscriptions?page=1&limit=10`,
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        if (!response.ok) {
          throw new Error('Error fetching data')
        }
        const { data } = await response.json()
        setSubscriptions(data)
      }
    } catch (error) {
      toast.error('Error fetching subscriptions')
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
    // compare the alphabets array with the data array which contains objects with the value pair of slug and a letter of the english alphabet. Find matching letters and omit them from the alphabets array
    const filteredAlphabets = alphabets.filter(
      (alphabet) => !data.some((item: any) => item.slug === alphabet)
    )
    setSortedKeywords(filteredAlphabets)
    return filteredAlphabets
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
  }, [keywordFound, token])
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
        handleUnsubscribe,
      }}
    >
      {children}
    </KeywordContext.Provider>
  )
}
