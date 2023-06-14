import { useContext, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { UserContext } from '@/contexts/userContext'
import {
  Box,
  styled,
  Paper,
  Avatar,
  Typography,
  Divider,
  OutlinedInput,
  Button,
  Switch,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Head from 'next/head'

import dynamic from 'next/dynamic'
import withAuth from '@/hooks/withAuth'

const RootLayout = dynamic(() => import('@/components/Dashboard/Layout'), {
  ssr: false,
})
const Navbar = dynamic(() => import('@/components/Dashboard/Navbar'), {
  ssr: false,
})
const Modal = dynamic(() => import('@/components/Dashboard/Modal'), {
  ssr: false,
})

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(251, 251, 251, 0.8)',
  border: '1px solid #E3E3E3',
  backdropFilter: 'blur(100px)',
  textAlign: 'center',
  height: '100%',
  borderRadius: '16px',
  color: theme.palette.text.secondary,
}))

const DashboardSecurityPage = () => {
  const { t } = useTranslation('security')
  const { updateUser, user, handleDeleteUser, token, forgotPassword } =
    useContext(UserContext)

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const [twoFactorAuth, setTwoFactorAuth] = useState<boolean>()

  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const [openDeletion, setOpenDeletion] = useState(false)

  const handleOpenDeletion = () => {
    setOpenDeletion(true)
  }
  const handleClose = () => {
    setOpen(false)
    setOpenDeletion(false)
  }

  const handleChangeTwoFactorAuth = () => {
    if (
      user?.twoFactorAuthEnabled === false ||
      user?.TwoFactorAuthEnabled === null
    ) {
      updateUser({ twoFactorAuthEnabled: true })
    } else {
      updateUser({ twoFactorAuthEnabled: false })
    }
  }

  const handleChangePassword = () => {
    updateUser({
      oldPassword: values.currentPassword,
      password: values.newPassword,
    })
  }

  useEffect(() => {
    if (user?.twoFactorAuthEnabled === true) {
      setTwoFactorAuth(true)
    }
  }, [])

  if (!token) {
    return <></>
  }
  return (
    <>
      <Head>
        <title>View On Website -{t('meta_title')} </title>
        <meta name="description" content={`${t('meta_description')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link
          rel="canonical"
          href="https://wiewonwebsite.com/en/illustration"
        />{' '}
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
          {/* <Navbar /> */}
          <Item
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
                lg: 'block',
                xl: 'block',
              },
              height: '822px',
              width: '100%',
            }}
          >
            {/* Name, profile photo, email  */}
            <Box
              style={{
                display: 'flex',
                marginTop: '50px',
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
                  {user?.fullName?.split(' ')[0]?.charAt(0)}
                  {user?.fullName?.split(' ')[1]?.charAt(0)}
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
            </Box>
            <Divider
              sx={{
                marginTop: '30px',
              }}
            />
            {/* Input fields */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginX: '92px',
                marginTop: '50px',
                flexDirection: { xs: 'column-reverse', xl: 'row' },
              }}
            >
              <Box
                sx={{
                  width: { xs: '90%', lg: '650px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Typography fontSize="36px">{t('change')}</Typography>

                {user?.hasPassword ? (
                  <>
                    <OutlinedInput
                      value={values?.currentPassword}
                      placeholder={`${t('pass')}`}
                      sx={{
                        height: '57px',
                        width: '100%',
                        marginTop: '30px',
                        fontSize: '24px',
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
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      onChange={(e) => {
                        setValues({
                          ...values,
                          currentPassword: e.target.value,
                        })
                      }}
                    />
                    <OutlinedInput
                      value={values.newPassword}
                      placeholder={`${t('new_pass')}`}
                      sx={{
                        height: '57px',
                        width: '100%',
                        marginTop: '24px',
                        fontSize: '24px',
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
                      onChange={(e) => {
                        setValues({
                          ...values,
                          newPassword: e.target.value,
                        })
                      }}
                    />
                    <OutlinedInput
                      value={values?.confirmPassword}
                      placeholder={`${t('confirm_pass')}`}
                      sx={{
                        height: '57px',
                        width: '100%',
                        marginTop: '24px',
                        fontSize: '24px',
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
                      onChange={(e) => {
                        setValues({
                          ...values,
                          confirmPassword: e.target.value,
                        })
                      }}
                    />
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        marginTop: '32px',
                      }}
                    >
                      <Button
                        onClick={handleChangePassword}
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
                          '&: hover': {
                            background: '#0090EC',
                          },
                        }}
                      >
                        {t('button_security')}
                      </Button>
                    </Box>
                  </>
                ) : (
                  <Box>
                    <Typography>{t('seems')}</Typography>
                    <Typography>{t('setPassword')}</Typography>
                    <Button onClick={() => forgotPassword(user.email)}>
                      {t('setTitle')}
                    </Button>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: { xs: '20px', lg: '0' },
                }}
              >
                <Box className="TextAlignSecurity">
                  <Typography fontSize="36px">{t('text')}</Typography>
                  <Typography fontSize="14px">{t('text_two')}</Typography>
                </Box>
                <Switch
                  className="IconSwitchDashboard"
                  checked={user?.twoFactorAuthEnabled}
                  onChange={(e) => {
                    if (user?.twoFactorAuthEnabled === true) {
                      handleOpen()
                      return
                    } else {
                      handleChangeTwoFactorAuth()
                      setTwoFactorAuth(true)
                    }
                  }}
                  sx={{
                    '.mui-style-15wmqzy-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track ':
                      {
                        backgroundColor: '#0090EC',
                      },
                    '.MuiSwitch-track': {
                      color: '#0090EC',
                    },
                    '	.MuiSwitch-thumb': {
                      color: '#0090EC',
                    },
                  }}
                />
              </Box>
            </Box>
            <Typography
              onClick={() => {
                handleOpenDeletion()
              }}
              textAlign="left"
              marginLeft="92px"
              marginTop="100px"
              sx={{ cursor: 'pointer' }}
            >
              {t('delete_account')}
            </Typography>
          </Item>
          {/* Mobile Profile View */}
          <Item
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
              width: '100%',
              padding: '0px 27px',
              position: 'relative',
              zIndex: '991',

              marginY: '4rem',
            }}
          >
            {/* Name, profile photo, email */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginY:"1.5rem"
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
                {user?.fullName?.split(' ')[0]?.charAt(0)}
                {user?.fullName?.split(' ')[1]?.charAt(0)}
              </Avatar>
              <Box
                sx={{
                  marginX: '2rem',
                }}
              >
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
              {t('change_info')}
            </Typography>
            {/* Current Password, New Password and confirm new Password */}
            <Box
              sx={{
                width: '100%',
                height: '353px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {user?.hasPassword ? (
                <>
                  <OutlinedInput
                    value={values?.currentPassword}
                    placeholder={`${t('pass')}`}
                    sx={{
                      height: '57px',
                      width: '100%',
                      fontSize: '24px',
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
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    onChange={(e) => {
                      setValues({
                        ...values,
                        currentPassword: e.target.value,
                      })
                    }}
                  />
                  <OutlinedInput
                    value={values?.newPassword}
                    placeholder={`${t('new_pass')}`}
                    sx={{
                      height: '57px',
                      width: '100%',
                      fontSize: '24px',
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
                    onChange={(e) => {
                      setValues({
                        ...values,
                        newPassword: e.target.value,
                      })
                    }}
                  />

                  <OutlinedInput
                    value={values?.confirmPassword}
                    placeholder={`${t('confirm_pass')}`}
                    sx={{
                      height: '57px',
                      width: '100%',
                      fontSize: '24px',
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
                    onChange={(e) => {
                      setValues({
                        ...values,
                        confirmPassword: e.target.value,
                      })
                    }}
                  />
                  <Button
                    disabled={values?.currentPassword === ''}
                    onClick={handleChangePassword}
                    sx={{
                      background: '#0090EC',
                      height: '44px',
                      width: '209px',
                      borderRadius: '13px',
                      fontSize: '20px',
                      fontWeight: 400,
                      color: 'white',
                      '&: hover': {
                        background: '#0090EC',
                      },
                    }}
                  >
                    {t('save_change')}
                  </Button>
                </>
              ) : (
                <Box>
                  <Typography>{t('seems')}</Typography>
                  <Typography>{t('setPassword')}</Typography>
                  <Button onClick={() => forgotPassword(user.email)}>
                    {t('setTitle')}
                  </Button>
                </Box>
              )}

              <Button
                color="error"
                sx={{ alignSelf: 'flex-start', cursor: 'pointer' }}
                onClick={() => {
                  handleOpenDeletion()
                }}
              >
                {t('delete_account')}
              </Button>
            </Box>
          </Item>
          <Modal
            title="Two factor Authentication off"
            open={open}
            handleClose={handleClose}
          >
            <Box>
              <Typography>{t('modal')}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                position: 'absolute',
                bottom: 0,
                width: '90%',
                justifyContent: 'space-between',
                margin: '0 auto',
                paddingBottom: '21px',
              }}
            >
              <Button
                color="info"
                variant="contained"
                sx={{ height: '42px', width: '154px' }}
                onClick={() => {
                  handleChangeTwoFactorAuth()
                  handleClose()
                }}
              >
                {t('sure')}
              </Button>
              <Button
                color="error"
                variant="contained"
                sx={{ height: '42px', width: '154px' }}
                onClick={() => {
                  handleClose()
                  setTwoFactorAuth(false)
                }}
              >
                {t('cancel_security')}
              </Button>
            </Box>
          </Modal>
          {/* Account deletion modal */}
          <Modal
            title="Account Deletion"
            open={openDeletion}
            handleClose={handleClose}
          >
            <Box>
              <Typography>{t('delete_accont')}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                position: 'absolute',
                bottom: 0,
                width: '90%',
                justifyContent: 'space-between',
                margin: '0 auto',
                paddingBottom: '21px',
              }}
            >
              <Button
                color="info"
                variant="contained"
                sx={{ height: '42px', width: '154px' }}
                onClick={() => {
                  handleDeleteUser()
                }}
              >
                {t('delete')}
              </Button>
              <Button
                color="error"
                variant="contained"
                sx={{ height: '42px', width: '154px' }}
                onClick={() => {
                  handleClose()
                  setTwoFactorAuth(false)
                }}
              >
                {t('cancel_security')}
              </Button>
            </Box>
          </Modal>
        </RootLayout>
      </>
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'security'])),
    },
  }
}
export default withAuth(DashboardSecurityPage)
