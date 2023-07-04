import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'

interface Props {
  children: React.ReactNode
}
const TypographyStyle = ({ children }: Props) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: '16px', md: '20px' },
          fontWeight: '500',
          lineHeight: '23px',
          marginY: '1rem',
          // textAlign: "justify",
          // textDecoration: "underline",
        }}
      >
        {children}
      </Typography>
    </>
  )
}
const TypographyUnderLine = ({ children }: Props) => {
  return (
    <>
      <Typography
        component={'span'}
        sx={{
          fontSize: { xs: '19px', md: '24px' },
          fontWeight: '500',
          lineHeight: '25px',
          marginX: '1rem',
          // textAlign: "justify",
          textDecoration: 'underline',
        }}
      >
        {children}
      </Typography>
    </>
  )
}

const Content = () => {
  const { t } = useTranslation('privacy')

  return (
    <>
      <ul className="list_one">
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('a_bold')}</TypographyUnderLine>
            {t('a_text')}
          </TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('b_bold')}</TypographyUnderLine>
            {t('b_text')}
          </TypographyStyle>
          <ul className="list_two">
            <li>
              <TypographyStyle>{t('b_one')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('b_two')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('b_three')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('b_four')}</TypographyStyle>
            </li>
          </ul>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('c_bold')}</TypographyUnderLine>
            {t('c_text')}
          </TypographyStyle>
          <ul className="list_two">
            <li>
              <TypographyStyle>{t('c_one')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('c_two')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('c_three')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('c_four')}</TypographyStyle>
            </li>
          </ul>
          <TypographyStyle>{t('c_text_two')}</TypographyStyle>
          <TypographyStyle>{t('c_text_three')}</TypographyStyle>
          <TypographyStyle>{t('c_text_four')}</TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('d_bold')}</TypographyUnderLine>
            {t('d_text')}
          </TypographyStyle>

          <ul className="list_two">
            <li>
              <TypographyStyle>{t('d_one')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_two')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_three')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_four')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_five')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_six')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_seven')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_eight')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_nine')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_ten')}</TypographyStyle>
            </li>{' '}
            <li>
              <TypographyStyle>{t('d_onty')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_twoty')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_thirty')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_fourty')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_fivety')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_sixty')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_seventy')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_eighty')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_ninety')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_twonty')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('d_twontyOne')}</TypographyStyle>
            </li>
            <TypographyStyle>{t('d_text_two')}</TypographyStyle>
          </ul>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('e_bold')}</TypographyUnderLine>
            {t('e_text')}
          </TypographyStyle>
          <TypographyStyle>{t('e_text_two')}</TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('f_bold')}</TypographyUnderLine>
            {t('f_text')}
          </TypographyStyle>
          <TypographyStyle>{t('f_text_two')}</TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('g_bold')}</TypographyUnderLine>
            {t('g_text')}
          </TypographyStyle>
          <TypographyStyle>{t('g_text_two')}</TypographyStyle>
          <TypographyStyle>{t('g_text_three')}</TypographyStyle>
          <TypographyStyle>{t('g_text_four')}</TypographyStyle>
          <ul className="list_two">
            <li>
              <TypographyStyle>{t('g_one')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('g_two')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('g_three')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('g_four')}</TypographyStyle>
            </li>
          </ul>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('h_bold')}</TypographyUnderLine>
            {t('h_text')}
          </TypographyStyle>
          <TypographyStyle>{t('h_text_two')}</TypographyStyle>
          <ul className="list_two">
            <li>
              <TypographyStyle>{t('h_one')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('h_two')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('h_three')}</TypographyStyle>
            </li>
            <li>
              <TypographyStyle>{t('h_four')}</TypographyStyle>
            </li>
          </ul>
          <TypographyStyle>{t('h_text_three')}</TypographyStyle>
          <TypographyStyle>{t('h_text_four')}</TypographyStyle>
          <TypographyStyle>{t('h_text_five')}</TypographyStyle>
          <TypographyStyle>{t('h_text_six')}</TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('i_bold')}</TypographyUnderLine>
            {t('i_text')}
          </TypographyStyle>
          <TypographyStyle>{t('i_text_one')}</TypographyStyle>
          <TypographyStyle>{t('i_text_two')}</TypographyStyle>
          <TypographyStyle>{t('i_text_three')}</TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('j_bold')}</TypographyUnderLine>
            {t('j_text')}
          </TypographyStyle>
          <TypographyStyle>{t('j_text_two')}</TypographyStyle>
          <TypographyStyle>{t('j_text_three')}</TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('k_bold')}</TypographyUnderLine>
            {t('k_text')}
          </TypographyStyle>
        </li>

        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('l_bold')}</TypographyUnderLine>
            {t('l_text')}
          </TypographyStyle>
          <TypographyStyle>{t('l_text_two')}</TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('m_bold')}</TypographyUnderLine>
            {t('m_text')}
          </TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('n_bold')}</TypographyUnderLine>
            {t('n_text')}
          </TypographyStyle>
          <TypographyStyle>{t('n_text_two')}</TypographyStyle>
          <TypographyStyle>{t('n_text_three')}</TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('o_bold')}</TypographyUnderLine>
            {t('o_text')}
          </TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('p_bold')}</TypographyUnderLine>
            {t('p_text')}
          </TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('q_bold')}</TypographyUnderLine>
            {t('q_text')}
          </TypographyStyle>
        </li>
        <li>
          <TypographyStyle>
            <TypographyUnderLine>{t('r_bold')}</TypographyUnderLine>
            {t('r_text')}:{' '}
            <Link href="https://admin@viewonwebsite.com">
              [admin@viewonwebsite.com]
            </Link>
          </TypographyStyle>
        </li>
      </ul>
    </>
  )
}
export default Content
