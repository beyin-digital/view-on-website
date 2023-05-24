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

const MobileProfile = () => {
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
  return (
    <>
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
    </>
  )
}

export default MobileProfile