import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Thumbs,
  Keyboard,
} from 'swiper'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import 'swiper/swiper-bundle.min.css'

import SwiperLabel from './SwiperLabel'
import Image from 'next/image'

SwiperCore.use([Navigation, Thumbs, Keyboard])

type ReactIdSwiperRef = {
  swiper: any
}

const SwiperSlider: React.FC<ReactIdSwiperRef> = () => {
  const { t } = useTranslation('slider')
  const [isVertical, setIsVertical] = useState(true)
  const [sliderValue, setSliderValue] = useState(0) // حالة لتخزين قيمة السلايدر الأول

  const keywords = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  const [selectedKeyword, setSelectedKeyword] = useState(keywords[0])

  const swiperRef = useRef<ReactIdSwiperRef>(null)
  const handleSlideChange = (swiper: SwiperCore) => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper
      const currentIndex = swiperInstance.realIndex
      setSelectedKeyword(keywords[currentIndex])
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 610) {
        setIsVertical(true)
      } else {
        setIsVertical(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Box
        sx={{
          height: {
            xs: '100%',
            sm: '400px',
            md: '250px',
            xl: '250px',
          },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
        className="imported"
      >
        <div className="swiper-button image-swiper-button-next">
          {/* <IoIosArrowForward /> */}
          <Image
            src="/icons/sliderArrowRight.svg"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          {/* <IoIosArrowBack /> */}
          <Image
            src="/icons/sliderArrowLeft.svg"
            alt=""
            width={40}
            height={40}
            placeholder="blur"
            blurDataURL="/icons/sliderArrowLeft.svg"
            loading="lazy"
          />
        </div>
        <Swiper
          direction={isVertical ? 'vertical' : 'horizontal'}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          slidesPerGroup={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 70,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          keyboard={true}
          spaceBetween={2}
          // navigation={true}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          modules={[EffectCoverflow, Pagination, Thumbs, Navigation]}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          className="swiper_container"
          pagination={{
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
              return (
                '<span class="' +
                currentClass +
                '"> </span>' +
                `${t('of')}` +
                '<span class="' +
                totalClass +
                '"> </span>'
              )
            },
            clickable: true,
          }}
          style={{
            position: 'relative',
          }}
        >
          {keywords.map((keyword, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: '100%',
                borderRadius: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/images/card.webp"
                style={{
                  width: '800px',
                }}
                loading="lazy"
                className="ImageSlider"
              />
              <Box
                sx={{
                  width: '800px',
                  position: 'absolute',
                  zIndex: '999999',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '50px',
                      sm: '60px',
                      md: '70px',
                      xl: '96px',
                    },
                    fontWeight: '500',
                    color: '#31E716',
                    lineHeight: { xs: '48px', md: '88.8px' },
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    marginY: '.2rem',
                  }}
                >
                  #{keyword}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '16px',
                      sm: '20px',
                      md: '20px',
                      xl: '20px',
                    },
                    fontWeight: '500',
                    color: '#0091ED',
                    lineHeight: '18.8px',
                    textAlign: 'center',
                  }}
                >
                  ViewOnWebsite.Com
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <SwiperLabel selectedKeyword={selectedKeyword} />
      </Box>
    </>
  )
}

export default SwiperSlider
