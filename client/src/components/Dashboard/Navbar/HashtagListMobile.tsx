import { KeywordContext } from '@/contexts/keywordContext'
import { UserContext } from '@/contexts/userContext'
import { Box, Tab, Tabs, Typography, IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Add } from '@mui/icons-material'
import { useRouter } from 'next/router'

export default function HashtagListMobile() {
  const { getUsersKeywords, keywords, selectedKeyword, setSelectedKeyword } =
    useContext(KeywordContext)
  const router = useRouter()
  const { user, token } = useContext(UserContext)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const selectedKeyword = keywords?.data?.find(
      (keyword: any) =>
        (decodeURI(encodeURI(keyword?.letters)) as any) === newValue
    ) as any
    setSelectedKeyword(selectedKeyword)
    if (router.query.hashtag) {
      router.push(`/${router.locale}/dashboard/`)
    }
  }
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (token) {
      if (router.query.hashtag) {
        getUsersKeywords(
          parseInt(router.query.page as string),
          parseInt(router.query.limit as string)
        )
        return
      }
      getUsersKeywords(page)
    }

    return () => {
      setSelectedKeyword(null)
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
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {keywords?.hasNextPage && router.locale == 'ar' && (
          <IconButton
            onClick={() => {
              setPage(page + 1)
              getUsersKeywords(page + 1)
            }}
          >
            <Add />
          </IconButton>
        )}
        <Tabs
          sx={{
            height: '100%',
            width: '85%',
            color: '#0090EC',
          }}
          TabIndicatorProps={{
            sx: {
              background: '#0090EC',
              color: '#0090EC',
            },
          }}
          value={selectedKeyword?.letters}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={'auto'}
          defaultValue={selectedKeyword?.letters}
          dir="ltr"
        >
          {keywords?.data?.map((keyword: any) => (
            <Tab
              sx={{
                minWidth: '15%',
                fontSize: '18px',
                marginTop: '10px',
                fontWeight: selectedKeyword === keyword ? 600 : 400,
                color: 'black',
              }}
              value={keyword?.letters}
              key={keyword?.id}
              label={`#` + decodeURI(encodeURI(keyword?.letters))}
            />
          ))}
        </Tabs>
        {keywords?.hasNextPage && router.locale == 'en' && (
          <IconButton
            onClick={() => {
              setPage(page + 1)
              getUsersKeywords(page + 1)
            }}
          >
            <Add />
          </IconButton>
        )}
      </Box>
    </Box>
  )
}
