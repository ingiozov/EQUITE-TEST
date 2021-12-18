import React from 'react'
import { Container, Box, styled } from '@mui/material'
import Image from 'next/image'

const Wrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
}))

export default function Logos() {
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Wrapper
        sx={{
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Box
          sx={{
            width: { xs: '137px', md: '190px' },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '15px', md: '20px' },
          }}
        >
          <Image src="/images/logos/bi.png" width={190} height={38} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Image src="/images/logos/bi2.png" width={81} height={21} />
            <Image src="/images/logos/bi3.png" width={81} height={21} />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '121px', md: '141px' },
          }}
        >
          <Image src="/images/logos/bybit.png" width={141} height={52} />
        </Box>
        <Box
          sx={{
            width: { xs: '139px', md: '174px' },
          }}
        >
          <Image src="/images/logos/okex.png" width={174} height={47} />
        </Box>
        <Box
          sx={{
            width: { xs: '116px', md: '136px' },
          }}
        >
          <Image src="/images/logos/ftx.png" width={136} height={49} />
        </Box>
        <Box
          sx={{
            width: { xs: '120px', md: '163px' },
          }}
        >
          <Image src="/images/logos/bitmex.png" width={163} height={27} />
        </Box>
        <Box
          sx={{
            width: { xs: '97px', md: '141px' },
          }}
        >
          <Image src="/images/logos/hit.png" width={141} height={60} />
        </Box>
      </Wrapper>
    </Container>
  )
}
