import { Box, Typography, Link } from '@mui/material'
// import Link from "next/link";
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'

const ContactDetails = () => {
  const cards = [
    {
      id: 1,
      name: 'Technical Support',
      text: 'For technical support please contact us through:',
      iconEmail: '',
      email: 'Support@viewonwebsite.com',
      iconPhone: '',
      phone: '+971 50 1234 567',
    },
    {
      id: 2,
      name: 'Technical Support',
      text: 'For technical support please contact us through:',
      iconEmail: '',
      email: 'Support@viewonwebsite.com',
      iconPhone: '',
      phone: '+971 50 1234 567',
    },
    {
      id: 3,
      name: 'Technical Support',
      text: 'For technical support please contact us through:',
      iconEmail: 'support@viewonwebsite.com',
      email: 'Support@viewonwebsite.com',
      iconPhone: '501234567',
      phone: '+971 50 1234 567',
    },
  ]
  return (
    <>
      <Box
        sx={{
          width: '90%',
          height: '100%',
          display: 'flex',
          alginItems: 'center',
          justifyContent: 'end',
          transform: 'skew(16deg, 0deg)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
            width: { xs: '95%', md: '70%' },
            height: '100%',
          }}
        >
          {cards.map((item) => (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'space-around',
                flexDirection: 'column',
                height: { xs: '100%', sm: '170px' },
                width: '95%',
              }}
              key={item.id}
            >
              <Typography
                sx={{
                  fontSize: { xs: '20px', sm: '30px', md: '40px' },
                  fontWeight: '400',
                  lineHeight: '37px',
                  px: { xs: '2rem', md: '0' },
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '16px', sm: '20px', md: '24px' },
                  fontWeight: '400',
                  lineHeight: '22px',
                  px: { xs: '2rem', md: '0' },
                }}
              >
                {item.text}
              </Typography>
              <Box
                sx={{
                  width: { xs: '100%', md: '80%' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: { xs: 'column', lg: 'row' },
                  px: { xs: '.2rem', sm: '2rem', md: '0' },
                }}
              >
                <Link
                  href="/mailto:support@viewonwebsite.com"
                  target="_blank"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '100%' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginY: { xs: '.5rem', md: '0' },
                    }}
                  >
                    {/* icon */}
                    <MdEmail size={25} />
                    <Typography
                      sx={{
                        fontSize: { xs: '16px', sm: '20px' },
                        fontWeight: '400',
                        lineHeight: '18px',
                        width: { xs: '90%', lg: '90%' },
                      }}
                    >
                      {item.email}
                    </Typography>
                  </Box>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=525886620"
                  target="_blank"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '100%' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginY: { xs: '.5rem', md: '0' },
                    }}
                  >
                    {/* icon */}
                    <RiWhatsappFill size={25} />
                    <Typography
                      sx={{
                        width: { xs: '90%', lg: '90%' },
                        fontSize: { xs: '16px', sm: '20px' },

                        fontWeight: '400',
                        lineHeight: '18px',
                      }}
                    >
                      {item.phone}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default ContactDetails
