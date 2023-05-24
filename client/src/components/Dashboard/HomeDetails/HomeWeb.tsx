import React, { useContext, useEffect, useRef } from 'react'
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
import html2canvas from 'html2canvas'
import { renderToStaticMarkup } from 'react-dom/server'

import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/contexts/userContext'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { MdLocationOn } from 'react-icons/md'
import dynamic from 'next/dynamic'
import { KeywordContext } from '@/contexts/keywordContext'
import { api } from '@/utils/api'
import { countries } from '@/utils/countries'

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
  borderRadius: '16px',
  color: theme.palette.text.secondary,
}))

const viewsData = [
  {
    id: 'today',
    label: 'Today',
    tKey: 'box_four_today',
    value: 1658874,
    color: 'hsla(112, 81%, 52%, 1)',
  },
  {
    id: 'all-time',
    label: 'All time',
    tKey: 'box_four_all',
    value: 13846847,
    color: 'hsla(203, 100%, 46%, 1)',
  },
]

const viewsTimeGraphData = [
  {
    id: '1 may',
    color: 'hsla(203, 100%, 46%, 1)',
    data: [
      {
        x: '10 jan',
        y: 298,
      },
      {
        x: '20 jan',
        y: 63,
      },
      {
        x: '30 jan',
        y: 218,
      },
      {
        x: '10 feb',
        y: 142,
      },
      {
        x: '20 feb',
        y: 291,
      },
      {
        x: '30 feb',
        y: 269,
      },
    ],
  },
]

const HomeWeb = () => {
  const { t } = useTranslation('dashboard')
  const router = useRouter()
  const { updateUser, user, token } = useContext(UserContext)
  const {
    selectedKeyword,
    setSelectedKeyword,
    subscriptions,
    getUserSubscriptions,
    getKeywordAnalytics,
  } = useContext(KeywordContext)

  const svgRef = useRef<SVGSVGElement>(null)

  const handleDownloadClick = () => {
    const svgCode = generateSVGCode()

    const tempElement = document.createElement('div')
    tempElement.innerHTML = svgCode

    html2canvas(tempElement.firstChild as HTMLElement).then((canvas) => {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'custom-svg.png'
      link.click()
    })
  }

  const generateSVGCode = () => {
    const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="200" height="200" fill="#f2f2f2" />
        <text x="100" y="100" text-anchor="middle" alignment-baseline="central" font-size="20">
          ${selectedKeyword?.letters?.toUpperCase()}
        </text>
      </svg>
    `
    return svgMarkup
  }
  const [values, setValues] = React.useState({
    hashtag: '',
    sublink: '',
    organization: '',
    location: {
      country: '',
      state: '',
    },
  })
  const [timeline, setTimeline] = React.useState('today')

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        console.log('location', position)

        const res = await api.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=ebb95c6b3fcd4c46a5fe97994c6f9d07`
        )
        const data = res.data.features
        setValues({
          ...values,
          location: {
            country: data[0].properties.country,
            state: data[0].properties.city,
          },
        })
        console.log(values)
      })
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    getUserSubscriptions()
    getKeywordAnalytics()
    if (selectedKeyword) {
      setValues({
        ...values,
        hashtag: selectedKeyword.letters,
        sublink: selectedKeyword.sublink,
        organization: selectedKeyword.organization,
        // location: {
        //   country: selectedKeyword.country,
        //   city: selectedKeyword.city,
        // },
      })
      const foundSubscription = subscriptions.find(
        (subscription) => subscription.keyword.id === selectedKeyword.id
      )
      setSelectedKeyword({
        ...selectedKeyword,
        subscription: { ...foundSubscription },
      })
      console.log(selectedKeyword)
    }
  }, [])

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
                placeholder={`${t('box_one_input')}`}
                value={values?.sublink}
                sx={{
                  height: '42px',
                  width: '100%',
                  background: 'white',
                  borderRadius: '15px',
                }}
              />
              {/* Organisation input */}
              <OutlinedInput
                placeholder={`${t('box_one_input_two')}`}
                sx={{
                  height: '42px',
                  width: '100%',
                  background: 'white',
                  borderRadius: '15px',
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
                    width: '175px',
                    background: '#31E716',
                    borderRadius: '7px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    disableRipple
                    variant="contained"
                    onClick={getLocation}
                    sx={{
                      height: '32px',
                      width: '160px',
                      background: '#31E716',
                      // borderRadius: "7px",
                      color: '#343132',
                      fontWeight: 400,
                      fontSize: '16px',
                      boxShadow: 'none',
                      textTransform: 'none',
                      lineHeight: '14px',
                      '&:hover': {
                        background: '#31E716',
                      },
                    }}
                  >
                    {t('current_location')}
                  </Button>
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
                  value={values.location.country}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      location: {
                        state: '',
                        country: e.target.value,
                      },
                    })
                  }
                  renderValue={(selected: any) => {
                    if (selected.length === 0) {
                      return 'Country'
                    }

                    return selected
                  }}
                  sx={{
                    height: '42px',
                    width: '164px',
                    background: 'white',
                    borderRadius: '15px',
                    marginX: '5px',
                  }}
                >
                  <MenuItem disabled value="">
                    {/* Country */}
                    {t('box_one_location_country')}
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country.country} value={country.country}>
                      {country.country}
                    </MenuItem>
                  ))}
                </Select>
                {/* State Select */}
                <Select
                  displayEmpty
                  onChange={(e) =>
                    setValues({
                      ...values,
                      location: {
                        ...values.location,
                        state: e.target.value,
                      },
                    })
                  }
                  value={values.location.state}
                  renderValue={(selected: any) => {
                    if (selected.length === 0) {
                      return 'State'
                    }
                    return selected
                  }}
                  sx={{
                    height: '42px',
                    width: '168px',
                    background: 'white',
                    borderRadius: '15px',
                    marginX: '5px',
                  }}
                >
                  <MenuItem disabled value="">
                    {/* State */}
                    {t('box_one_location_state')}
                  </MenuItem>
                  {countries
                    .find(
                      (country) => country.country === values.location.country
                    )
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
              {/* "&:hover > 	.MuiButton-root": {
												background: "#31E716",
											}, */}
            </Box>
          </Item>
        </Grid>
        <Grid item md={6} xl={3} height={380}>
          <Item sx={{ paddingX: '18px' }}>
            <Typography
              marginTop="17px"
              variant="h5"
              textAlign="start"
              component="div"
              fontSize="20px"
              height="35px"
              fontWeight={400}
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
                #{selectedKeyword?.letters?.toUpperCase()}
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
                {t('box_two_date_bought')} :{' '}
                {new Date(
                  selectedKeyword?.subscription?.purchaseDate
                ).toLocaleDateString()}
              </Typography>
              <Typography>
                {t('box_two_date_next')} :{' '}
                {new Date(
                  selectedKeyword?.subscription?.renewalDate
                ).toLocaleDateString()}
              </Typography>
            </Box>
            <Typography
              sx={{ cursor: 'pointer' }}
              fontSize="14px"
              fontWeight={400}
              align="center"
              marginY="18px"
              onClick={handleDownloadClick}
            >
              {/* Download E-label stamp */}
              {t('box_two_download')}
            </Typography>
          </Item>
        </Grid>
        <Grid container item md={6} xl={3} height={380} rowGap={4}>
          <Grid item xs={12} height={165}>
            <Item>
              <Typography
                align="center"
                marginTop="10px"
                fontSize="20px"
                marginX="37px"
              >
                {/* Redirections Last 24 Hours */}
                {t('box_three_one')}
              </Typography>
              <Typography fontSize="36px" fontWeight={600} lineHeight="40px">
                16,584
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} height={165}>
            <Item>
              <Typography
                align="center"
                marginTop="10px"
                fontSize="20px"
                marginX="37px"
              >
                {/* Total Number of Redirections */}
                {t('box_three_two')}
              </Typography>
              <Typography marginTop="10px" marginBottom="8px" fontSize="14px">
                {t('box_three_to')} : 20/06/2023
              </Typography>
              <Typography fontSize="36px" fontWeight={600} lineHeight="40px">
                13,846,847
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
            >
              {/* Today VS All-time */}
              {t('box_four_title')}
            </Typography>
            <PieChart data={viewsData} />
          </Item>
        </Grid>
        {/* Second Row */}
        <Grid
          item
          md={12}
          xl={12}
          height={419}
          sx={{
            minHeight: '50vh',
          }}
        >
          <Item sx={{ background: 'rgba(251, 251, 251, 0.3)' }}>
            <Box
              sx={{
                width: '90%',
                height: '24px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                paddingX: '18px',
              }}
            >
              <Typography fontSize="20px">
                {t('box_main_chart_title')}
              </Typography>
              {/* Time Selection */}
              <Select
                displayEmpty
                value={timeline}
                renderValue={(selected: any) => {
                  if (selected.length === 0) {
                    return 'Duration'
                  }
                }}
                sx={{
                  height: '42px',
                  width: '168px',
                  background: 'white',
                  borderRadius: '15px',
                  '&:hover select': {
                    border: '0',
                  },
                }}
              >
                <MenuItem disabled value="today">
                  last 24 hours
                </MenuItem>
                <MenuItem disabled value="week">
                  last 7 days
                </MenuItem>
                <MenuItem disabled value="month">
                  last 30 days
                </MenuItem>
                <MenuItem disabled value="year">
                  Past year
                </MenuItem>
              </Select>
            </Box>
            <LineChart data={viewsTimeGraphData} />
          </Item>
        </Grid>
      </Grid>
    </>
  )
}

export default HomeWeb
