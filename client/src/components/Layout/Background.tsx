import { Box } from '@mui/material'
import Image from 'next/image'

export const Background = () => {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          height: '100vh',
          width: '100%',
          maxWidth: '100%',
          minHeight: '100%',
          background: "url('/images/swirl.webp')",
          backgroundPositionY: {
            xs: '-1250px',
            sm: '-1100px',
            md: '-1100px',
            xl: '-1000px',
          },
          backgroundPositionX: { xs: '-800px', md: '-600px', xl: '-300px' },
          backgroundRepeat: 'no-repeat',
        }}
        className="ImageBgHome"
      />
      <Box
        sx={{
          position: 'fixed',
          height: '100vh',
          width: '100%',
          background: "url('/images/swirl.webp')",
          backgroundPositionY: {
            xs: '-1250px',
            sm: '-1100px',
            md: '-1100px',
            xl: '-1000px',
          },
          backgroundPositionX: { xs: '-1100px', md: '-600px', xl: '-300px' },
          backgroundRepeat: 'no-repeat',
        }}
        className="ImageHome"
      />
      {/* <Image
				alt=""
				style={{
					top: "-1rem",
					left: "-11rem",
					position: "absolute",
				}}
				src="/images/swirl.webp"
				width={500}
				height={500}
				className="ImageHome"
				placeholder="blur"
				blurDataURL="/images/swirl.webp"
			/> */}
    </>
  )
}
