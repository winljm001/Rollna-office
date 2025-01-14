import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Scrollbar, Mousewheel, Parallax, EffectCreative } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/scrollbar'
import 'swiper/css/parallax'

import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageThree from '@/components/PageThree'
import PageFour from '@/components/PageFour'
import PageMobileThree from '@/components/PageThree/mobile'
import Footer from '@/components/Footer'

function App() {
  const [mySwiper, setMySwiper] = useState<any>(null)
  return (
    <>
      <Box display={{ base: 'none', lg: 'block' }}>
        <Swiper
          // install Swiper modules
          id="OuterSwiper"
          className="swiperView"
          modules={[Scrollbar, Mousewheel, Parallax, EffectCreative]}
          touchRatio={0.5}
          allowSlidePrev
          centeredSlides
          mousewheel={{
            thresholdTime: 800,
          }}
          parallax
          direction="vertical"
          scrollbar={{ draggable: true }}
          grabCursor={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, '-20%', -1],
            },
            next: {
              translate: [0, '100%', 0],
            },
          }}
          onSwiper={(swiper) => {
            setMySwiper(swiper)
          }}
          onSlideChange={(n) => {
            console.log(n.activeIndex, 9999)
            if (n.activeIndex == 3) {
              mySwiper.mousewheel.disable()
            }
          }}
        >
          <SwiperSlide>
            {/* <div style={{ height: '100%' }}>1</div> */}
            <PageOne />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div style={{ height: '100%' }}>2</div> */}
            <PageTwo />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div style={{ height: '100%' }}>3</div> */}
            <PageThree />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div style={{ height: '100%' }}>4</div> */}
            <PageFour IndexSwiper={mySwiper} />
          </SwiperSlide>
        </Swiper>
        <Footer />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <PageOne />
        <PageTwo />
        <PageMobileThree />
      </Box>
    </>
  )
}

export default App
