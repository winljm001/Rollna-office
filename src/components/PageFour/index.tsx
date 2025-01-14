import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Center, Flex, Text, Image } from '@chakra-ui/react'
import Lottie from 'lottie-react'

import px2vw from '@/utils/px2vw'
import roadMapAni from '@/assets/lotties/roadMap.json'
import rbg from '@/assets/imgs/rbg.png'
import rbgSelected from '@/assets/imgs/rbgSelected.png'

function PageFour(prop: any) {
  const containerRef = useRef(null)
  const [preScrollTop] = useState(0)
  const [isTop, setIsTop] = useState(0)
  let number = 0
  // const indexSwiper = prop.IndexSwiper
  useEffect(() => {
    const handleScroll = () => {
      const container: any = containerRef.current
      if (container && container.scrollTop !== undefined) {
        const { scrollTop } = container
        if (preScrollTop >= scrollTop) {
          setIsTop(++number)
        }
      }
    }
    const container: any = containerRef.current
    container?.addEventListener('scroll', handleScroll)
    return () => {
      const container: any = containerRef.current
      container?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isTop > 0) {
      prop.IndexSwiper.mousewheel.enable()
    }
  }, [isTop])
  return (
    <Flex
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={{ base: 0, lg: '90px' }}
    >
      <Box
        w={{ base: '100%', lg: '1286px' }}
        m="0 auto"
        h="100%"
        overflow="auto"
        className="fourBox"
        ref={containerRef}
      >
        <Center
          fontSize={{ base: px2vw(32), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          color="black"
          data-swiper-parallax-y="-300"
          data-swiper-parallax-duration="500"
          data-swiper-parallax-opacity="0"
          mt={{ base: px2vw(16), lg: '32px' }}
        >
          RoadMap
        </Center>
        <Box position="relative" h={{ base: px2vw(571), lg: '575px' }}>
          <Box
            position="absolute"
            top={{ base: px2vw(200), lg: '240px' }}
            left="8%"
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="1000"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbg}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  p={{ base: px2vw(5), lg: '5px' }}
                  fontSize={{ base: px2vw(16), lg: '16px' }}
                  color="black"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textTransform="capitalize"
                  textAlign="center"
                  w="100%"
                >
                  Be-fore
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '180px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600">
                  Kickoff the project:
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>
                  1.Research the Market and Technology.
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            left="35%"
            top={{ base: px2vw(100), lg: '92px' }}
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="2000"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbgSelected}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  w="100%"
                  fontSize={{ base: px2vw(24), lg: '24px' }}
                  color="wh.100"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textAlign="center"
                >
                  Q3
                  <Center fontSize={{ base: px2vw(16), lg: '16px' }}>2023</Center>
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '180px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600">
                  Kickoff the project:
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>
                  1.Research the Market and Technology.
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            right="12%"
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="3000"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbg}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  p={{ base: px2vw(5), lg: '5px' }}
                  fontSize={{ base: px2vw(16), lg: '16px' }}
                  color="black"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textTransform="capitalize"
                  textAlign="center"
                  w="100%"
                >
                  Be-fore
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '180px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600">
                  Kickoff the project:
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>
                  1.Research the Market and Technology.
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            top={{ base: px2vw(140), lg: '64px' }}
            h={{ base: px2vw(250), lg: '250px' }}
          >
            <Lottie animationData={roadMapAni} loop={false} />
          </Box>

          <Box
            position="absolute"
            left="26%"
            bottom={{ base: px2vw(0), lg: '3px' }}
            data-swiper-parallax-y="-300"
            data-swiper-parallax-duration="1500"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbg}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  p={{ base: px2vw(5), lg: '5px' }}
                  fontSize={{ base: px2vw(16), lg: '16px' }}
                  color="black"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textTransform="capitalize"
                  textAlign="center"
                  w="100%"
                >
                  Be-fore
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '180px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600">
                  Kickoff the project:
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>
                  1.Research the Market and Technology.
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            bottom={{ base: px2vw(178), lg: '178px' }}
            right="21%"
            data-swiper-parallax-y="-300"
            data-swiper-parallax-duration="2500"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbg}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  p={{ base: px2vw(5), lg: '5px' }}
                  fontSize={{ base: px2vw(16), lg: '16px' }}
                  color="black"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textTransform="capitalize"
                  textAlign="center"
                  w="100%"
                >
                  Be-fore
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '180px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600">
                  Kickoff the project:
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>
                  1.Research the Market and Technology.
                </Text>
                <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box pb={{ base: px2vw(100), lg: '100px' }} pt={{ base: px2vw(50), lg: '55px' }}>
          <Center
            fontSize={{ base: px2vw(32), lg: '32px' }}
            fontWeight={{ base: px2vw(900), lg: '900' }}
            color="purple"
            textTransform="capitalize"
            mt={{ base: px2vw(16), lg: '32px' }}
          >
            Join us to access the future of omnichain trading
          </Center>
          <Center
            fontSize={{ base: px2vw(32), lg: '32px' }}
            fontWeight={{ base: px2vw(900), lg: '900' }}
            color="purple"
            textTransform="capitalize"
            mt={{ base: px2vw(16), lg: '32px' }}
          >
            with RollNA.
          </Center>
          <Center>
            <Button
              // onClick={() => setModel(true)}
              bg="purple"
              color="wh.100"
              mt={{ base: px2vw(10), lg: '10px' }}
            >
              Contact us
            </Button>
          </Center>
        </Box>
      </Box>
    </Flex>
  )
}

export default React.memo(PageFour)
