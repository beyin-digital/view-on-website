import React, { useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Grid,
  Typography,
  Box,
  Paper,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useTranslation } from 'react-i18next'
import { MdLocationOn } from 'react-icons/md'
import dynamic from 'next/dynamic'
import { KeywordContext } from '@/contexts/keywordContext'
import { api } from '@/utils/api'
import { countries } from '@/utils/countries'
import { downloadSvg } from '@/utils/downloadSvg'
import { useRouter } from "next/router";

import io from 'socket.io-client'
const socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL as string)
const geoApifyKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY

const PieChart = dynamic(() => import('@/components/Dashboard/Home/PieChart'), {
  ssr: false,
})
const LineChart = dynamic(
  () => import('@/components/Dashboard/Home/LineChart'),
  {
    ssr: false,
  }
)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(251, 251, 251, 0.8)',
  border: '1px solid #E3E3E3',
  backdropFilter: 'blur(100px)',
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '100%',
  borderRadius: '15px',
  color: theme.palette.text.secondary,
}))

const HomeWeb = () => {
  const { t } = useTranslation('dashboard')
	const { locale } = useRouter();

  const {
    selectedKeyword,
    setAnalyticsData,
    updateKeywordDetails,
    analyticsData,
  } = useContext(KeywordContext)

  const [lineChartType, setLineChartType] = useState(1)

  const [values, setValues] = React.useState({
    hashtag: '',
    sublink: '',
    organisation: '',
    country: '',
    state: '',
  })

  const [pieChartData, setPieChartData] = React.useState([
    {
      id: 'today',
      label: `${t('box_four_today')}`,
      tKey: 'box_four_today',
      value: 0,
      color: 'hsla(112, 81%, 52%, 1)',
    },
    {
      id: 'all-time',
      label: `${t('box_four_all')}`,
      tKey: 'box_four_all',
      value: 0,
      color: 'hsla(203, 100%, 46%, 1)',
    },
  ])
  const [lineChartData, setLineChartData] = React.useState<any>(null)
  const [locationIsLoading, setLocationIsLoading] = useState(false)
  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLocationIsLoading(true)
        const res = await api.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=${geoApifyKey}`
        )
        if (res.status === 200) {
          const data = res.data.features
          setValues({
            ...values,
            country: data[0].properties.country,
            state: data[0].properties.city,
          })
          setLocationIsLoading(false)
        }
        setLocationIsLoading(false)
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
           label: 'Today',
      tKey: 'box_four_today',
            value: data?.totalVisitsToday,
            color: 'hsla(112, 81%, 52%, 1)',
          },
          {
            id: 'all-time',
           label: 'All time',
      tKey: 'box_four_all',
            value: data?.totalVisits,
            color: 'hsla(203, 100%, 46%, 1)',
          },
        ])
        setLineChartData([
          {
            id: "",
            color: "",
            data: data?.totalDailyVisitsByHoursOfTheDay,
          },
          {
            id: "",
            color: '',
            data: data?.totalVisitsByDaysOfTheWeek,
          },
          {
            id: "",
            color: '',
            data: data?.totalVisitsByDaysOfTheMonth,
          },
          {
            id: "",
            color: '',
            data: data?.totalVisitsByMonthsOfTheYear,
          },
        ])
      }
    }

    socket.emit(
      'createConnection',
      { keywordId: selectedKeyword?.id },
      (data: any) => updateData(data)
    )

    socket.emit(
      'getNewRecords',
      { keywordId: selectedKeyword?.id },
      (data: any) => {
        updateData(data)
      }
    )

    socket.on('getNewRecords', (data: any) => updateData(data))

    setValues({
      ...values,
      hashtag: decodeURI(selectedKeyword?.letters),
      sublink: selectedKeyword?.sublink,
      organisation: selectedKeyword?.organisation || '',
      country: selectedKeyword?.country || '',
      state: selectedKeyword?.state || '',
    })
  }, [selectedKeyword])

  return (
    <>
      <Grid
        container
        columnSpacing={2}
        rowGap={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >
        {/* First row */}

        {/* First Card */}
        <Grid item md={6} xl={3.4} height={380}>
          <Item sx={{ paddingX: '18px' }}>
            {/* Card Title */}
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

            {/* First inputs container */}
            <Box
              sx={{
                marginTop: '11px',
                height: '101px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Sublink input */}
              <OutlinedInput
                value={values?.sublink}
                onChange={(e) =>
                  setValues({ ...values, sublink: e.target.value })
                }
                placeholder={`${t('box_one_input')}`}
                sx={{
                  height: '42px',
                  width: '100%',
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
              />
              {/* Organisation input */}
              <OutlinedInput
                value={values?.organisation}
                onChange={(e) =>
                  setValues({ ...values, organisation: e.target.value })
                }
                placeholder={`${t('box_one_input_two')}`}
                sx={{
                  height: '42px',
                  width: '100%',
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
              />
            </Box>

            {/* Location inputs */}
            <Box>
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
                  // marginTop="40px"
                  fontSize="20px"
                  variant="h5"
                  textAlign="start"
                  component="div"
                >
                  {/* Location */}
                  {t('box_one_location')}
                </Typography>
                {/* Location Button */}
                <Box
                  sx={{
                    height: '32px',
                    width: '200px',
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
                    onClick={getLocation}
                    sx={{
                      height: '32px',
                      width: '100%',
                      background: '#31E716',
                      // borderRadius: "7px",
                      color: '#343132',
                      fontWeight: 400,
                      fontSize: '15px',
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
              {/* Second inputs container */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {/* Country select */}
                <Select
                  displayEmpty
                  value={values?.country}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      state: '',
                      country: e.target.value,
                    })
                  }
                  renderValue={(selected: any) => {
                    if (selected.length === 0) {
                      return `${t('box_one_location_country')}`
                    }

                    return selected
                  }}
                  sx={{
                    height: '42px',
                    width: '164px',
                    background: 'white',
                    borderRadius: '15px',
                    marginX: '5px',
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
                    {/* Country */}
                    {t('box_one_location_country')}
                  </MenuItem>
                  {countries?.map((country) => (
                    <MenuItem key={country?.country} value={country?.country}>
                      {country?.country}
                    </MenuItem>
                  ))}
                </Select>
                {/* State Select */}
                <Select
                  displayEmpty
                  onChange={(e) =>
                    setValues({
                      ...values,
                      state: e.target.value,
                    })
                  }
                  value={values?.state}
                  renderValue={(selected: any) => {
                    if (selected?.length === 0) {
                      return `${t('box_one_location_state')}`
                    }
                    return selected
                  }}
                  sx={{
                    height: '42px',
                    width: '168px',
                    background: 'white',
                    borderRadius: '15px',
                    marginX: '5px',
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
                    {/* State */}
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
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginTop: '20px',
              }}
            >
              <Button
                // disabled={
                //   JSON.stringify(values) ===
                //   JSON.stringify(selectedKeyword)
                // }
                onClick={() => {
                  updateKeywordDetails(selectedKeyword?.id, {
                    country: values?.country,
                    state: values?.state,
                    organisation: values?.organisation,
                    sublink: values?.sublink,
                  })
                }}
                disableRipple
                variant="contained"
                sx={{
                  height: '42px',
                  width: '154px',
                  background: '#0090EC',
                  borderRadius: '7px',
                  color: '#FBFBFB',
                  fontWeight: 500,
                  fontSize: '20px',
                  boxShadow: 'none',
                  textTransform: 'none',
                  '&:hover': {
                    background: '#0090EC',
                  },
                }}
              >
                {/* Update */}
                {t('box_one_button')}
              </Button>
            </Box>
          </Item>
        </Grid>
        {/* box two */}
        <Grid item md={6} xl={3} height={380}>
          <Item
            sx={{
              paddingX: '18px',
            }}
          >
            <Typography
              marginTop="17px"
              variant="h5"
              textAlign="start"
              component="div"
              fontSize="20px"
              height="35px"
              fontWeight={400}
              color="#343132"
            >
              {/* Hashtag Details */}
              {t('box_two_title')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '59px',
                marginTop: '20px',
                borderRadius: '16px',
                background: 'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
              }}
            >
              <Typography fontSize="32px" fontWeight={500}>
                {locale === "en" ? (
					<>
					#{decodeURI(selectedKeyword?.letters?.toUpperCase())}
					</>
				):(
					<>
					{decodeURI(selectedKeyword?.letters?.toUpperCase())}#
					</>
				)}
              </Typography>
            </Box>

            <Typography
              fontSize="14px"
              fontWeight={400}
              align="center"
              marginY="18px"
            >
              {/* Valid */}
              {t('box_two_valid')}
            </Typography>
            {/* Dates */}
            {selectedKeyword?.subscription && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '100%',
                  height: '106px',
                  background: 'rgba(251, 251, 251, 0.6)',
                  border: '1px solid #FBFBFB',
                  backdropFilter: 'blur(100px)',
                  borderRadius: '24px',
                }}
              >
                <Typography>
                  {t('box_two_date_bought')}:
                  {new Date(
                    selectedKeyword?.subscription?.purchaseDate
                  ).toLocaleDateString()}
                </Typography>
                {selectedKeyword.isPremium && (
                  <Typography>
                    {t('box_two_date_next')}:
                    {new Date(
                      selectedKeyword?.subscription?.renewalDate
                    ).toLocaleDateString()}
                  </Typography>
                )}
              </Box>
            )}
            <Button
              disabled={!selectedKeyword}
              variant="contained"
              sx={{
                height: '42px',
                width: '200px',
                background: '#0090EC',
                borderRadius: '7px',
                color: '#FBFBFB',
                fontWeight: 500,
                fontSize: '14px',
                boxShadow: 'none',
                textTransform: 'none',
                cursor: 'pointer',
                '&:hover': {
                  background: '#0090EC',
                },
                marginY: '18px',
              }}
              onClick={() => {
                downloadSvg(decodeURI(selectedKeyword?.letters?.toUpperCase()))
              }}
            >
              {/* Download E-label stamp */}
              {t('box_two_download')}
            </Button>
          </Item>
        </Grid>
        {/* box three */}
        <Grid container item md={6} xl={3} height={380} rowGap={2}>
          <Grid item xs={12} height={165}>
            <Item>
              <Typography
                align="center"
                marginTop="10px"
                fontSize="20px"
                marginX="37px"
                color="#343132"
              >
                {/* Redirections Last 24 Hours */}
                {t('box_three_one')}
              </Typography>
              <Typography fontSize="36px" fontWeight={600} lineHeight="40px">
                {analyticsData?.totalVisitsToday?.toLocaleString() as any}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} height={200}>
            <Item>
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
              <Typography marginTop="10px" marginBottom="8px" fontSize="14px">
                {t('box_three_to')} :
                {new Date(selectedKeyword?.createdAt).toLocaleDateString()}
              </Typography>
              <Typography fontSize="36px" fontWeight={600} lineHeight="40px">
                {analyticsData?.totalVisits?.toLocaleString() as any}
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid item md={6} xl={2.6} height={380}>
          <Item>
            <Typography
              align="center"
              marginTop="18px"
              fontSize="20px"
              marginX="37px"
              color="#343132"
            >
              {/* Today VS All-time */}
              {t('box_four_title')}
            </Typography>
            <PieChart data={pieChartData} />
          </Item>
        </Grid>
        {/* Second Row */}
        <Grid
          item
          md={12}
          xl={12}
          height={402}
          sx={{
            minHeight: '45vh',
          }}
        >
          <Item
            sx={{
              background: 'rgba(251, 251, 251, 0.3)',
            }}
          >
            <Box
              sx={{
                width: '90%',
                height: '10px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                paddingX: '18px',
                color: '#343132',
              }}
            >
              <Typography fontSize="20px">
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
                  '&:hover select': {
                    border: '0',
                  },
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
            {lineChartData !== null &&
              lineChartData.length >= 4 &&
              (lineChartType == 1 ? (
                <LineChart data={lineChartData[0]} />
              ) : lineChartType == 2 ? (
                <LineChart data={lineChartData[1]} />
              ) : lineChartType == 3 ? (
                <LineChart data={lineChartData[2]} />
              ) : lineChartType == 4 ? (
                <LineChart data={lineChartData[3]} />
              ) : null)}
          </Item>
        </Grid>
      </Grid>
    </>
  )
}

export default HomeWeb
