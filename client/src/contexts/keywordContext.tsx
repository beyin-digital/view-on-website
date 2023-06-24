import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { UserContext } from './userContext'

export const KeywordContext = createContext<any>({})

export const KeywordProvider = ({ children }: any) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const { token, user } = useContext(UserContext)
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
  const [mobileKeywords, setMobileKeywords] = useState<any>({})

  const [subscriptions, setSubscriptions] = useState<any>({})
  const [selectedKeyword, setSelectedKeyword] = useState<any>(null)

  //   const [token, setToken] = useState<string | null>(null)
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
        `${apiUrl}/keywords/letters?letters=${encodeURI(keyword)}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': router.locale || 'en-GB',
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
      if (token === null || token === undefined) {
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
          'Accept-Language': router.locale || 'en-GB',
        },
        body: JSON.stringify({
          letters: encodeURI(letters),
          sublink,
          interval,
        }),
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
          'Accept-Language': router.locale || 'en-GB',
        },
      })
      if (!response.ok) {
        throw new Error('Error fetching data')
      }
      toast.success('Unsubscribed successfully')
      getUserSubscriptions(1)
    } catch (error) {
      toast.error('Error unsubscribing')
    }
  }

  const getUsersKeywords = async (page: number, limit?: number) => {
    try {
      const response = await fetch(
        `${apiUrl}/keywords?page=${page ? page : 1}&limit=${
          limit ? limit : 10
        }`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Accept-Language': router.locale || 'en-GB',
          },
        }
      )
      if (!response.ok) {
        throw new Error('Error fetching data')
      }

      const data = await response.json()
      if (data?.data?.length <= 0) {
        return
      }
      if (router.query.hashtag) {
        const keyword = data?.data?.find(
          (keyword: any) => keyword.slug === router.query.hashtag
        )
        setKeywords({
          ...keywords,
          data: [...data.data],
          hasNextPage: false,
        })
        console.log(keyword)
        setSelectedKeyword(keyword)
        return
      }

      if ((page === 1 || page === undefined) && limit === undefined) {
        setKeywords(data)
        setSelectedKeyword(data.data[0])
        return data
      }

      setKeywords({
        ...keywords,
        data: [...keywords.data, ...data.data],
        hasNextPage: data.hasNextPage,
      })

      return data
    } catch (error) {
      console.error('Error fetching keywords')
    }
  }

  const getUserSubscriptions = async (page?: number) => {
    try {
      const response = await fetch(
        `${apiUrl}/subscriptions?page=${page}&limit=10`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Accept-Language': router.locale || 'en-GB',
          },
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
        // check for existing keyword and remove it from the list if it isn't returned from the api
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
          'Accept-Language': router.locale || 'en-GB',
        },
        body: JSON.stringify(values),
      })
      if (!response.ok) {
        throw new Error('Error fetching data')
      }
      const data = await response.json()
      toast.success('Keyword updated successfully')
      setSelectedKeyword({ ...selectedKeyword, ...data })
      const updatedData = await getUsersKeywords(1, keywords?.data?.length)
      console.log('updatedData', updatedData)
      setKeywords({ ...keywords, data: updatedData.data })
    } catch (error) {
      toast.error('Error updating keyword')
    }
  }

  useEffect(() => {
    // const savedToken = localStorage.getItem('token')
    // if (savedToken) {
    //   setToken(savedToken)
    // }
  }, [keywordFound, selectedKeyword])
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
        setKeywords,
        setSubscriptions,
        mobileKeywords,
        setMobileKeywords,
        setFoundKeyword,
      }}
    >
      {children}
    </KeywordContext.Provider>
  )
}
