import React from 'react'
import { Flex, Text, Box, Image, List, ListItem, Center } from '@chakra-ui/react'
import Lottie from 'lottie-react'

import px2vw from '@/utils/px2vw'
import convenient from '@/assets/imgs/page21.png'
import interoperability from '@/assets/imgs/page22.png'
import lowcost from '@/assets/imgs/page23.png'
import supremesecurity from '@/assets/imgs/page24.png'
import leftAni from '@/assets/lotties/page2.json'

interface ArrItem {
  icon: string
  title: string
  desc: string
}
const arr: ArrItem[] = [
  {
    icon: convenient,
    title: 'Convenient',
    desc: 'Elevated smart contract accounts and seamless asset movement across omnichains enable more convenient development and usage.',
  },
  {
    icon: interoperability,
    title: 'Interoperability',
    desc: 'A unified liquidity pool maximizes the efficient use of funds. Once deployed, omnichains are interoperable.',
  },
  {
    icon: lowcost,
    title: 'Low Cost',
    desc: 'Gas-Efficient Multi-Chain Rollup enables affordable Omnichain trading.',
  },
  {
    icon: supremesecurity,
    title: 'Supreme Security',
    desc: 'Ultra-Secure trustless cross-chain solution with L1-level security.',
  },
]
function PageTwo() {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={{ base: 0, lg: '90px' }}
    >
      <Flex
        direction="column"
        justifyContent="center"
        h="100%"
        w={{ base: '100%', lg: '1286px' }}
        m="0 auto"
      >
        <Center
          fontSize={{ base: px2vw(32), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          color="black"
          mt={{ base: px2vw(16), lg: '32px' }}
          data-swiper-parallax-y="-500"
          data-swiper-parallax-duration="500"
          data-swiper-parallax-opacity="0"
        >
          Advanced Omnichain Trading Protocol
        </Center>
        <Flex alignItems="center" p={{ base: px2vw(10), lg: '10px' }}>
          <Lottie
            animationData={leftAni}
            loop={false}
            data-swiper-parallax-y="-1000"
            data-swiper-parallax-duration="1000"
            data-swiper-parallax-opacity="0"
          />
          <Box ml={{ base: px2vw(20), lg: '20px' }}>
            <List spacing={3}>
              {arr.map((item: ArrItem) => (
                <ListItem
                  key={item.title}
                  data-swiper-parallax-y="-1000"
                  data-swiper-parallax-duration="1500"
                  data-swiper-parallax-opacity="0"
                >
                  <Flex alignItems="center">
                    <Image
                      src={item?.icon}
                      ignoreFallback
                      width={{ base: px2vw(32), lg: '32px' }}
                    />
                    <Box color="black" p="10px">
                      <Text
                        fontSize={{ base: px2vw(16), lg: '16px' }}
                        fontWeight={{ base: px2vw(700), lg: '700' }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        fontSize={{ base: px2vw(14), lg: '14px' }}
                        lineHeight={{ base: px2vw(24), lg: '24px' }}
                        noOfLines={[3]}
                      >
                        {item.desc}
                      </Text>
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageTwo
