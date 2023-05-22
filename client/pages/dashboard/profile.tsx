import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import RootLayout from '@/components/Dashboard/Layout'
import { UserContext } from '@/contexts/userContext'
import { GetStaticProps } from 'next'
import {
  Box,
  styled,
  Paper,
  Avatar,
  Typography,
  Divider,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
} from '@mui/material'
import Head from 'next/head'

import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import FooterMobile from '@/components/Footer/FooterMobile'
import Navbar from '@/components/Dashboard/Navbar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(251, 251, 251, 0.8)',
  border: '1px solid #E3E3E3',
  backdropFilter: 'blur(100px)',
  textAlign: 'center',
  height: '100%',
  borderRadius: '16px',
  color: theme.palette.text.secondary,
}))

const DashboardProfilePage = () => {
  const { t } = useTranslation('profile')

  const router = useRouter()
  const { updateUser, user, token } = useContext(UserContext)

  const [values, setValues] = useState({
    fullName: '',
    organisation: '',
    country: '',
  })

  useEffect(() => {
    if (user) {
      setValues({
        fullName: user?.fullName,
        organisation: user?.organisation,
        country: '',
      })
    }
  }, [])

  if (!user) {
    return <div>loading...</div>
  }

  const handleUpdateUser = async () => {
    updateUser({ ...values })
  }
  return (
    <>
      <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <>
        <Box
          sx={{
            width: '100%',
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            top: '0',
            zIndex: '999999',
          }}
        >
          <Navbar />
        </Box>

        <RootLayout>
          {/* Desktop Profile View */}
          <Item
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                lg: 'block',
              },
              height: '822px',
              width: '100%',
            }}
          >
            {/* Name, profile photo, email  */}
            <Box
              style={{
                display: 'flex',
                marginTop: '65px',
                marginLeft: '92px',
                marginRight: '92px',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* Name and profile photo */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#6BBF52',
                    width: '83px',
                    height: '83px',
                    fontSize: '40px',
                    borderRadius: '21px',
                  }}
                  variant="square"
                >
                  {user?.fullName.split(' ')[0].charAt(0)}
                  {user?.fullName.split(' ')[1].charAt(0)}
                </Avatar>
                <Typography
                  sx={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    marginLeft: '50px',
                  }}
                >
                  {user?.fullName}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '24px' }}>{user?.email}</Typography>
            </Box>
            <Divider sx={{ marginTop: '38px' }} />
            <Box
              sx={{
                marginTop: '67px',
                // marginLeft: "92px",
                width: '650px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
              className="profileDashboard"
            >
              <Typography fontSize="36px">{t('change')}</Typography>

              <OutlinedInput
                value={values?.fullName}
                placeholder={`${t('name')}`}
                sx={{
                  height: '57px',
                  width: '100%',
                  marginTop: '45px',
                  fontSize: '24px',
                  background: 'white',
                  borderRadius: '15px',
                }}
              />
              <OutlinedInput
                value={values?.organisation}
                placeholder={`${t('organization')}`}
                sx={{
                  height: '57px',
                  width: '100%',
                  marginTop: '24px',
                  fontSize: '24px',
                  background: 'white',
                  borderRadius: '15px',
                }}
              />
              <Select
                displayEmpty
                value={values.country}
                renderValue={(selected: any) => {
                  if (selected.length === 0) {
                    return (
                      <Typography
                        sx={{
                          fontSize: '24px',
                          textAlign: 'left',
                        }}
                      >
                        {t('country')}
                      </Typography>
                    )
                  }
                }}
                sx={{
                  height: '57px',
                  width: '100%',
                  marginTop: '24px',
                  background: 'white',
                  borderRadius: '15px',
                }}
              >
                <MenuItem disabled value="">
                  {/* State */}
                  {t('country')}
                </MenuItem>
                <MenuItem value={1}>One</MenuItem>
              </Select>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  marginTop: '32px',
                }}
              >
                <Button
                  // onClick={handleUpdateUser}
                  disableRipple
                  variant="contained"
                  sx={{
                    height: '63px',
                    width: '255px',
                    background: '#0090EC',
                    borderRadius: '15px',
                    color: '#FBFBFB',
                    fontWeight: 400,
                    fontSize: '24px',
                    boxShadow: 'none',
                    textTransform: 'none',
                  }}
                >
                  {/* Save Changes */}
                  {t('button_profile')}
                </Button>
              </Box>
            </Box>
          </Item>

          {/* Mobile Profile View */}
          <Box
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                lg: 'none',
              },
              width: '100%',
              height: '100vh',
              padding: '27px',
              marginX: { sm: '15px' },
              borderRadius: { xs: '0', sm: '16px' },
              backgroundColor: { xs: '0', sm: 'rgba(251, 251, 251, 0.8)' },
              border: { xs: '0', sm: '1px solid #E3E3E3' },
              backdropFilter: { xs: '0', sm: 'blur(100px)' },
            }}
          >
            {/* Name, profile photo, email */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#6BBF52',
                  width: '46px',
                  height: '43px',
                  fontSize: '20px',
                  borderRadius: '8px',
                }}
                variant="square"
              >
                {user?.fullName.split(' ')[0].charAt(0)}
                {user?.fullName.split(' ')[1].charAt(0)}
              </Avatar>
              <Box>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginLeft: '7px',
                  }}
                >
                  {user?.fullName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginLeft: '7px',
                    color: '#8C8C8C',
                  }}
                >
                  {user?.email}
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                margin: '44px  0 22px 0',
              }}
            >
              {t('change')}
            </Typography>
            {/* Full Name Organisation and Country Selection Input */}
            <Box
              sx={{
                width: '100%',
                height: '297px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <OutlinedInput
                value={values?.fullName}
                placeholder={`${t('name')}`}
                sx={{
                  height: '57px',
                  width: '100%',
                  fontSize: '24px',
                  background: 'white',
                  borderRadius: '15px',
                }}
              />
              <OutlinedInput
                value={values?.organisation}
                placeholder={`${t('organization')}`}
                sx={{
                  height: '57px',
                  width: '100%',
                  fontSize: '24px',
                  background: 'white',
                  borderRadius: '15px',
                }}
              />
              <Select
                displayEmpty
                value={values.country}
                renderValue={(selected: any) => {
                  if (selected.length === 0) {
                    return (
                      <Typography
                        sx={{
                          fontSize: '24px',
                          textAlign: 'left',
                        }}
                      >
                        {t('country')}
                      </Typography>
                    )
                  }
                }}
                sx={{
                  height: '57px',
                  width: '100%',
                  background: 'white',
                  borderRadius: '15px',
                }}
              >
                <MenuItem disabled value="">
                  {t('country')}
                </MenuItem>
              </Select>

              <Button
                sx={{
                  background: '#0090EC',
                  height: '44px',
                  width: '209px',
                  borderRadius: '13px',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'white',
                }}
              >
                {/* Save Changes */}
                {t('button_profile')}
              </Button>
            </Box>
          </Box>
          {/* <FooterMobile /> */}
        </RootLayout>
      </>
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'profile'])),
    },
  }
}

export default DashboardProfilePage
