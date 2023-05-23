import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay } from 'swiper'

export default function SliderSwiper() {
  const images = [
    { id: 3, img: '/images/slid.webp' },
    { id: 4, img: '/images/slid.webp' },
    { id: 5, img: '/images/slid.webp' },
    { id: 6, img: '/images/sliderExample.webp' },
  ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        // slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwipe"
        effect="fade"
      >
        {images.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '300px',
            }}
          >
            <img
              src={item.img}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '300px',
              }}
              alt=""
              title=""
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
