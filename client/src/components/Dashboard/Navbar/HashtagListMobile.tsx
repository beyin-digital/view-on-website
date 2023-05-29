import { KeywordContext } from '@/contexts/keywordContext'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'

export default function HashtagListMobile() {
  const { getUsersKeywords, keywords, selectedKeyword, setSelectedKeyword } =
    useContext(KeywordContext)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const selectedKeyword = keywords?.find(
      (keyword: any) => keyword.letters === newValue
    )
    setSelectedKeyword(selectedKeyword)
  }
  useEffect(() => {
    getUsersKeywords()
  }, [])
  return (
    <Box
      sx={{
        width: '100%',
        height: '84px',
        display: { xs: 'flex', md: 'flex', lg: 'none' },
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Typography fontSize="20px" fontWeight={600} color="#505050">
        My #Hashtags
      </Typography>
      <Tabs
        sx={{
          height: '100%',
          width: '75%',
        }}
        value={selectedKeyword?.letters}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        defaultValue={keywords[0]?.letters}
      >
        {keywords?.map((keyword: any) => (
          <Tab
            sx={{
              minWidth: '15%',
              fontSize: '18px',
              marginTop: '10px',
              fontWeight: selectedKeyword === keyword ? 600 : 400,
              color: 'black',
            }}
            value={keyword.letters}
            key={keyword.id}
            label={`#` + keyword.letters}
          />
        ))}
      </Tabs>
    </Box>
  )
}
