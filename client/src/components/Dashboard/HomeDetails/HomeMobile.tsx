import React, { useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Typography,
  Box,
  Paper,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
} from '@mui/material'

import { UserContext } from '@/contexts/userContext'
import { useTranslation } from 'react-i18next'
import dynamic from 'next/dynamic'
import io from 'socket.io-client'
import { KeywordContext } from '@/contexts/keywordContext'
import { countries } from '@/utils/countries'
import { downloadSvg } from '@/utils/downloadSvg'
import { LoadingButton } from '@mui/lab'
import { MdLocationOn } from 'react-icons/md'
import { api } from '@/utils/api'
const socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL as string)
const geoApifyKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY

const PieChart = dynamic(() => import('@/components/Dashboard/Home/PieChart'), {
  ssr: false,
})
const LineChartMobile = dynamic(
  () => import('@/components/Dashboard/Home/LineChartMobile'),
  {
    ssr: false,
  }
)

const HashtagListMobile = dynamic(
  () => import('@/components/Dashboard/Navbar/HashtagListMobile')
)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(251, 251, 251, 0.8)',
  border: '1px solid #E3E3E3',
  backdropFilter: 'blur(100px)',
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '100%',
  borderRadius: '16px',
  color: theme.palette.text.secondary,
}))

const HomeMobile = () => {
  const { t } = useTranslation('dashboard')
  const {
    selectedKeyword,
    setAnalyticsData,
    updateKeywordDetails,
    analyticsData,
  } = useContext(KeywordContext)

  const [lineChartType, setLineChartType] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const [values, setValues] = React.useState({
    hashtag: '',
    sublink: '',
    organisation: '',
    country: '',
    state: '',
    timezone: '',
    coordinates: [] as number[],
  })

  const [pieChartData, setPieChartData] = React.useState([
    {
      id: 'today',
      label: 'Today',
      tKey: 'box_four_today',
      value: 0,
      color: 'hsla(112, 81%, 52%, 1)',
    },
    {
      id: 'all-time',
      label: 'All time',
      tKey: 'box_four_all',
      value: 0,
      color: 'hsla(203, 100%, 46%, 1)',
    },
  ])

  const [lineChartData, setLineChartData] = useState<any>(null)

  const [locationIsLoading, setLocationIsLoading] = useState(false)

  const handleUpdateKeywordDetails = async () => {
    try {
      setIsLoading(true)
      const foundCoordinates = values.country
        ? (countries?.find((c) => c?.country === values?.country)
            ?.coordinates as number[])
        : []

      const { timezone } = (await getLocationData(
        foundCoordinates[0],
        foundCoordinates[1]
      )) as any

      await updateKeywordDetails(selectedKeyword?.id, {
        country: values?.country,
        state: values?.state,
        organisation: values?.organisation,
        sublink: values?.sublink,
        timezone: timezone,
      })
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }
  const getLocationData = async (lat?: number, lng?: number) => {
    try {
      setLocationIsLoading(true)
      const res = await api.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat as number}&lon=${
          lng as number
        }&apiKey=${geoApifyKey}`
      )
      if (res.status === 200) {
        const data = res.data.features
        setValues({
          ...values,
          country: data[0].properties.country,
          state: data[0].properties.state || data[0].properties.city,
          timezone: data[0].properties.timezone.name,
        })
      }
    } catch (error) {
      setLocationIsLoading(false)
    } finally {
      setLocationIsLoading(false)
    }
  }

  const getAutoLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          setLocationIsLoading(true)
          setValues({
            ...values,
            timezone: '',
          })
          const res = await api.get(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=${geoApifyKey}`
          )
          if (res.status === 200) {
            const data = res.data.features
            setValues({
              ...values,
              country: data[0].properties.country,
              state: data[0].properties.state || data[0].properties.city,
              timezone: data[0].properties.timezone.name,
            })
          }
        } catch (error) {
          setLocationIsLoading(false)
        } finally {
          setLocationIsLoading(false)
        }
      })
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setValues({
          ...values,
          coordinates: [position.coords.latitude, position.coords.longitude],
        })
      })
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    if (selectedKeyword == null) return
    const updateData = (data: any) => {
      if (data?.keywordId === selectedKeyword?.id) {
        setAnalyticsData({
          ...analyticsData,
          totalVisits: data?.totalVisits,
          totalVisitsToday: data?.totalVisitsToday,
          totalDailyVisitsByHoursOfTheDay:
            data?.totalDailyVisitsByHoursOfTheDay,
          totalVisitsByMonthsOfTheYear: data?.totalVisitsByMonthsOfTheYear,
          totalVisitsByDaysOfTheWeek: data?.totalVisitsByDaysOfTheWeek,
          totalVisitsByDaysOfTheMonth: data?.totalVisitsByDaysOfTheMonth,
        })
        setPieChartData([
          {
            id: 'today',
            label: `${t('box_four_today')}`,
            tKey: 'box_four_today',
            value: data?.totalVisitsToday,
            color: 'hsla(112, 81%, 52%, 1)',
          },
          {
            id: 'all-time',
            label: `${t('box_four_all')}`,
            tKey: 'box_four_all',
            value: data?.totalVisits,
            color: 'hsla(203, 100%, 46%, 1)',
          },
        ])
        setLineChartData([
          {
            id: `${t('id_one')}`,
            color: 'hsla(203, 100%, 46%, 1)',
            data: data?.totalDailyVisitsByHoursOfTheDay,
          },
          {
            id: `${t('id_two')}`,
            color: 'hsla(203, 100%, 46%, 1)',
            data: data?.totalVisitsByDaysOfTheWeek,
          },
          {
            id: `${t('id_three')}`,
            color: 'hsla(203, 100%, 46%, 1)',
            data: data?.totalVisitsByDaysOfTheMonth,
          },
          {
            id: `${t('id_four')}`,
            color: 'hsla(203, 100%, 46%, 1)',
            data: data?.totalVisitsByMonthsOfTheYear,
          },
        ])
      }
    }

    const getClientTimezone = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      return timezone
    }

    // Call the function to retrieve the client's timezone and update the state
    const timezone = getClientTimezone()

    socket.emit(
      'createConnection',
      { keywordId: selectedKeyword?.id, timezone },
      (data: any) => updateData(data)
    )

    socket.emit(
      'getNewRecords',
      { keywordId: selectedKeyword?.id, timezone },
      (data: any) => updateData(data)
    )

    socket.on('getNewRecords', (data: any) => updateData(data))

    setValues({
      ...values,
      hashtag: decodeURI(encodeURI(selectedKeyword?.letters)),
      sublink: selectedKeyword?.sublink,
      organisation: selectedKeyword?.organisation || '',
      country: selectedKeyword?.country || '',
      state: selectedKeyword?.state || '',
    })
  }, [selectedKeyword])

  return (
    <>
      <Box
        sx={{
          marginTop: '16px',
          flexGrow: 1,
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          gap: '16px',
          marginX: { xs: '15px', sm: '29px' },
          marginY: '6rem',
        }}
      >
        <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}>
          <HashtagListMobile />
        </Box>
        {/* Main chart */}
        <Item
          sx={{
            width: '100%',
            height: '429px',
            paddingY: '1rem',
          }}
        >
          <>
            {selectedKeyword?.timezone ? (
              <Box
                sx={{
                  width: '100%',
                  height: '24px',
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingX: '18px',
                }}
              >
                <Typography fontSize="20px" color="#343132">
                  {t('box_main_chart_title')}
                </Typography>
                {/* Time Selection */}
                <Select
                  displayEmpty
                  value={lineChartType}
                  onChange={(e) => {
                    setLineChartType(e.target.value as number)
                  }}
                  sx={{
                    height: '42px',
                    width: '168px',
                    background: 'white',
                    borderRadius: '15px',
                    '.MuiOutlinedInput-notchedOutline': {
                      border: '0',
                      padding: '9px',
                    },
                    '&:hover > .MuiOutlinedInput-notchedOutline': {
                      border: '0',
                    },
                  }}
                >
                  <MenuItem value={0} disabled>
                    Duration
                  </MenuItem>
                  <MenuItem value={1}>24 hours</MenuItem>
                  <MenuItem value={2}>7 days</MenuItem>
                  <MenuItem value={3}>30 days</MenuItem>
                  <MenuItem value={4}>Year</MenuItem>
                </Select>
              </Box>
            ) : (
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold', fontSize: '32px' }}>
                  {t('chart_access')}
                </Typography>
              </Box>
            )}
            {selectedKeyword?.timezone &&
              lineChartData !== null &&
              lineChartData.length >= 4 &&
              (lineChartType == 1 ? (
                <LineChartMobile data={lineChartData[0]} />
              ) : lineChartType == 2 ? (
                <LineChartMobile data={lineChartData[1]} />
              ) : lineChartType == 3 ? (
                <LineChartMobile data={lineChartData[2]} />
              ) : lineChartType == 4 ? (
                <LineChartMobile data={lineChartData[3]} />
              ) : null)}
          </>
        </Item>
        {/* pie chart */}
        <Item
          sx={{
            width: '100%',
            height: '303px',
          }}
        >
          <Typography
            align="center"
            marginTop="18px"
            fontSize="20px"
            marginX="37px"
            color="#343132"
          >
            {t('box_four_title')}
          </Typography>
          <PieChart data={pieChartData} />
        </Item>
        {/* Redirection count */}
        <Item
          sx={{
            width: '100%',
            height: '161px',
          }}
        >
          <Typography
            align="center"
            marginTop="18px"
            fontSize="20px"
            marginX="37px"
            color="#343132"
          >
            {t('box_three_one')}
          </Typography>
          <Typography fontSize="36px" fontWeight={600} lineHeight="54px">
            {analyticsData?.totalVisitsToday?.toLocaleString() as any}
          </Typography>
        </Item>
        {/* total redirections */}
        <Item
          sx={{
            width: '100%',
            height: '207px',
          }}
        >
          <Typography
            align="center"
            marginTop="10px"
            fontSize="20px"
            marginX="37px"
            color="#343132"
          >
            {/* Total Number of Redirections */}
            {t('box_three_two')}
          </Typography>
          <Typography marginTop="14px" marginBottom="8px" fontSize="14px">
            {t('box_three_to')} :
            {new Date(selectedKeyword?.createdAt).toLocaleDateString()}
          </Typography>
          <Typography fontSize="36px" fontWeight={600} lineHeight="54px">
            {analyticsData?.totalVisits?.toLocaleString() as any}
          </Typography>
        </Item>
        <Item
          sx={{
            width: '100%',
            height: { xs: '400px', sm: '315px' },
          }}
        >
          <Typography
            marginTop="17px"
            variant="h5"
            textAlign="start"
            component="div"
            fontSize="16px"
            height="47px"
            fontWeight={400}
            color="#343132"
          >
            {t('box_two_title')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '80%',
              width: '100%',
              margin: '0 auto',
              paddingX: '54px',
            }}
          >
            {/* Hashtag */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '49px',
                borderRadius: '13px',
                background: 'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
              }}
            >
              <Typography fontSize="26px" fontWeight={700}>
                #{decodeURI(encodeURI(selectedKeyword?.letters))}
              </Typography>
            </Box>

            <Typography
              fontSize="11px"
              fontWeight={400}
              align="center"
              marginY="18px"
              color="#343132"
            >
              {t('box_two_valid')}
            </Typography>
            {/* Subscription dates */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '60%',
                height: { xs: '100px', sm: '90px' },
                borderRadius: '20px',
                justifyContent: 'space-around',
                marginY: '1rem',
              }}
            >
              <Typography>
                {t('box_two_date_bought')} :{' '}
                {new Date(
                  selectedKeyword?.subscription?.purchaseDate
                ).toLocaleDateString()}
              </Typography>
              {/* <Typography>
								{t("box_two_date_next")} :{" "}
								{new Date(
									selectedKeyword?.subscription?.renewalDate,
								).toLocaleDateString()}
							</Typography> */}
            </Box>

            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                height: '20%',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  height: '42px',
                  width: '100%',
                  background: '#0090EC',
                  borderRadius: '7px',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '11px',
                  boxShadow: 'none',
                  textTransform: 'uppercase',
                  '&:hover': {
                    background: '#0090EC',
                  },
                  margin: '.2rem',
                }}
                onClick={() => {
                  downloadSvg(decodeURI(encodeURI(selectedKeyword?.letters)))
                }}
              >
                {t('box_two_download')}
              </Button>
            </Box>
          </Box>
        </Item>
        <Item
          sx={{
            width: '100%',
            height: { xs: 'auto', sm: '319px' },
            paddingX: '40px',
          }}
        >
          <Typography
            marginTop="17px"
            variant="h5"
            textAlign="start"
            component="div"
            fontSize="20px"
            fontWeight={400}
            color="#343132"
          >
            {/* Hashtag Info */}
            {t('box_one_title')}
          </Typography>

          {/* Sublink and organisation input */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '80%',
              width: 'full',
            }}
          >
            <OutlinedInput
              value={values?.sublink}
              onChange={(e) =>
                setValues({ ...values, sublink: e.target.value })
              }
              placeholder={`${t('box_one_input')}`}
              sx={{
                height: '35px',
                width: '100%',
                background: 'white',
                borderRadius: '10px',
                marginY: '7px',
                '.MuiOutlinedInput-notchedOutline': {
                  border: '0',
                  padding: '9px',
                },
                '&:hover > .MuiOutlinedInput-notchedOutline': {
                  border: '0',
                },
              }}
            />
            <OutlinedInput
              value={values?.organisation}
              onChange={(e) =>
                setValues({ ...values, organisation: e.target.value })
              }
              placeholder={`${t('box_one_input_two')}`}
              sx={{
                height: '35px',
                width: '100%',
                background: 'white',
                borderRadius: '10px',
                marginY: '7px',
                '.MuiOutlinedInput-notchedOutline': {
                  border: '0',
                  padding: '9px',
                },
                '&:hover > .MuiOutlinedInput-notchedOutline': {
                  border: '0',
                },
              }}
            />
            {/* Location input */}
            <Box>
              {/* Title */}

              {/* Second inputs container */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '70px',
                  }}
                >
                  {/* Title */}
                  <Typography
                    marginTop="-8px"
                    fontSize="16px"
                    variant="h5"
                    textAlign="start"
                    component="div"
                    color="#343132"
                  >
                    {t('box_one_location')}
                  </Typography>
                  {/* Location Button */}
                  <Box
                    sx={{
                      height: '24px',
                      width: '60%',
                      background: '#31E716',
                      borderRadius: '7px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LoadingButton
                      disableRipple
                      loading={locationIsLoading}
                      variant="contained"
                      onClick={getAutoLocation}
                      sx={{
                        height: '24px',
                        width: '100%',
                        background: '#31E716',
                        // borderRadius: "7px",
                        color: '#343132',
                        fontWeight: 400,
                        fontSize: '12px',
                        boxShadow: 'none',
                        textTransform: 'none',
                        lineHeight: '14px',
                        '&:hover': {
                          background: '#31E716',
                        },
                      }}
                    >
                      <span>{t('current_location')}</span>
                    </LoadingButton>
                    <MdLocationOn size={25} />
                  </Box>
                </Box>
                {/* Country select */}
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Select
                    displayEmpty
                    value={values?.country}
                    onChange={async (e) => {
                      setValues({
                        ...values,
                        state: '',
                        country: e.target.value,
                        coordinates: countries.find(
                          (country) => country?.country === e.target.value
                        )?.coordinates as any,
                        timezone: '',
                      })
                    }}
                    // renderValue={(selected: any) => {
                    //   if (selected?.length === 0) {
                    //     return `${t('box_one_location_country')}`
                    //   }

                    //   return selected
                    // }}
                    sx={{
                      height: '35px',
                      width: '48%',
                      background: 'white',
                      borderRadius: '15px',
                      '.MuiOutlinedInput-notchedOutline': {
                        border: '0',
                        padding: '9px',
                      },
                      '&:hover > .MuiOutlinedInput-notchedOutline': {
                        border: '0',
                      },
                    }}
                  >
                    <MenuItem disabled value="">
                      {'box_one_location_country'}
                    </MenuItem>
                    {countries?.map((country) => (
                      <MenuItem key={country?.country} value={country?.country}>
                        {country?.country}
                      </MenuItem>
                    ))}
                  </Select>
                  <Select
                    displayEmpty
                    value={values?.state}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        state: e.target.value,
                      })
                    }
                    // renderValue={(selected: any) => {
                    //   if (selected?.length === 0) {
                    //     return `${t('box_one_location_state')}`
                    //   }
                    //   return selected
                    // }}
                    sx={{
                      height: '35px',
                      width: '48%',
                      background: 'white',
                      borderRadius: '15px',
                      '.MuiOutlinedInput-notchedOutline': {
                        border: '0',
                        padding: '9px',
                      },
                      '&:hover > .MuiOutlinedInput-notchedOutline': {
                        border: '0',
                      },
                    }}
                  >
                    <MenuItem disabled value="">
                      {t('box_one_location_state')}
                    </MenuItem>
                    {countries
                      .find((country) => country?.country === values?.country)
                      ?.states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                  </Select>
                </Box>
                {/* State Select */}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  marginTop: '16px',
                }}
              >
                <Button
                  disabled={
                    isLoading ||
                    values.country === '' ||
                    values.state === '' ||
                    selectedKeyword.letters === '' ||
                    selectedKeyword.sublink === '' ||
                    selectedKeyword.letters === undefined ||
                    selectedKeyword.state === values.state
                  }
                  onClick={handleUpdateKeywordDetails}
                  disableRipple
                  variant="contained"
                  sx={{
                    height: '35px',
                    width: '127px',
                    background: '#0090EC',
                    borderRadius: '7px',
                    color: '#FBFBFB',
                    fontWeight: 500,
                    fontSize: '16px',
                    boxShadow: 'none',
                    textTransform: 'none',
                    '&:hover': {
                      background: '#0090EC',
                    },
                  }}
                >
                  {t('box_one_button')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Item>
      </Box>
    </>
  )
}

export default HomeMobile
