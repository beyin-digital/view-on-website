import { KeywordContext } from '@/contexts/keywordContext'
import { UserContext } from '@/contexts/userContext'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'

export default function HashtagListMobile() {
  const {
    getUsersKeywords,
    keywords,
    mobileKeywords,
    selectedMobileKeyword,
    setSelectedMobileKeyword,
  } = useContext(KeywordContext)

  const { token } = useContext(UserContext)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const selectedMobileKeyword = keywords?.data?.find(
      (keyword: any) => keyword.letters === newValue
    )
    setSelectedMobileKeyword(selectedMobileKeyword)
  }
  useEffect(() => {
    if (token) {
      getUsersKeywords()
    }
  }, [token])

  return (
    <Box
      sx={{
        width: '100%',
        height: '84px',
        display: { xs: 'flex', md: 'none', lg: 'none' },
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Typography fontSize="20px" fontWeight={600} color="#505050">
        My #Hashtags
      </Typography>
      {mobileKeywords?.data?.length > 0 && (
        <Tabs
          sx={{
            height: '100%',
            width: '75%',
            color: '#0090EC',
          }}
          TabIndicatorProps={{
            sx: {
              background: '#0090EC',
              color: '#0090EC',
            },
          }}
          value={selectedMobileKeyword?.letters}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          defaultValue={selectedMobileKeyword?.letters}
        >
          {mobileKeywords?.data?.map((keyword: any) => (
            <Tab
              sx={{
                minWidth: '15%',
                fontSize: '18px',
                marginTop: '10px',
                fontWeight: selectedMobileKeyword === keyword ? 600 : 400,
                color: 'black',
              }}
              value={keyword.letters}
              key={keyword.id}
              label={`#` + keyword.letters}
            />
          ))}
        </Tabs>
      )}
    </Box>
  )
}
