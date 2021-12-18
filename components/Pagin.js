import React from 'react'
import { Container, Box, styled } from '@mui/material'

const Wrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginTop: '370px',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '80px',
  },
  [theme.breakpoints.up('lg')]: {},
}))

export default function Pagin() {
  return (
    <Wrapper>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            width: '12.72px',
            height: '12.72px',
            background: 'rgba(16, 28, 43, 0.1)',
            border: '1px solid #C49BFF',
            boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
            transform: 'rotate(45deg)',
          }}
        ></Box>
        <Box
          sx={{
            width: '12.72px',
            height: '12.72px',
            background: 'rgba(16, 28, 43, 0.1)',
            border: '1px solid #C49BFF',
            boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
            transform: 'rotate(45deg)',
          }}
        ></Box>
        <Box
          sx={{
            width: '12.72px',
            height: '12.72px',
            background: '#C49BFF',
            boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
            transform: 'rotate(45deg)',
          }}
        ></Box>
      </Container>
    </Wrapper>
  )
}
