import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/contexts/userContext'
import {
  Box,
  Avatar,
  Typography,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
} from '@mui/material'

import { useTranslation } from 'react-i18next'
import { countries } from '@/utils/countries'

const MobileProfile = () => {
  const { t } = useTranslation('profile')

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
        country: user?.country as string,
      })
    }
  }, [])

  if (!token) {
    return <></>
  }
  return (
    <Box
      sx={{
        marginX: { sm: '15px' },
        width: { md: '100%' },
        maxWidth: '100%',
        maxHeight: { xs: '100vh', sm: '100%' },
        height: { xs: '100%', sm: '100vh' },
        display: {
          xs: 'block',
          sm: 'flex',
          lg: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'block',
            lg: 'none',
          },
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '100%',
          maxHeight: { xs: '100vh', sm: '100%' },
          height: { xs: '', sm: '100vh' },
          padding: '27px',
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
            {user?.fullName?.split(' ')[0]?.charAt(0)}
            {user?.fullName?.split(' ')[1]?.charAt(0)}
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
              '.MuiOutlinedInput-notchedOutline': {
                border: '0',
                padding: '9px',
              },
              '&:hover > .MuiOutlinedInput-notchedOutline': {
                border: '0',
              },
            }}
            onChange={(e) => {
              setValues({ ...values, fullName: e.target.value })
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
              '.MuiOutlinedInput-notchedOutline': {
                border: '0',
                padding: '9px',
              },
              '&:hover > .MuiOutlinedInput-notchedOutline': {
                border: '0',
              },
            }}
            onChange={(e) => {
              setValues({ ...values, organisation: e.target.value })
            }}
          />
          <Select
            displayEmpty
            value={values.country}
            onChange={(e) => {
              setValues({ ...values, country: e.target.value })
            }}
            renderValue={(selected: any) => {
              if (selected?.length === 0) {
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
              return selected
            }}
            sx={{
              height: '57px',
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
            placeholder={`${t('country')}`}
          >
            <MenuItem disabled value="">
              {t('country')}
            </MenuItem>
            {countries.map((country) => (
              <MenuItem value={country?.country} key={country?.country}>
                {country?.country}
              </MenuItem>
            ))}
          </Select>

          <Button
            onClick={() => {
              if (user) {
                updateUser({
                  fullName: values.fullName,
                  organisation: values.organisation,
                  country: values.country,
                })
              }
            }}
            disabled={
              values.fullName === user?.fullName &&
              values.organisation === user?.organisation &&
              values.country === user?.country
            }
            disableRipple
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
            {/* Save Changes */}
            {t('button_profile')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default MobileProfile
