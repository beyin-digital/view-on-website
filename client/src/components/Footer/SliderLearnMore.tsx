import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay } from 'swiper'

const SliderLearnMore = () => {
  const images = [
    '/images/phone.png',
    '/images/phone.png',
    '/images/phone.png',
    '/images/phone.png',
    '/images/phone.png',
    '/images/phone.png',
    '/images/phone.png',
  ]
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="modalSlider"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              border: '1px solid',
              borderRadius: '20px',
            }}
            className="modalSlide"
          >
            <img
              src={image}
              alt=""
              title=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SliderLearnMore
