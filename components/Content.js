import React from 'react'
import { Container, Box, Typography, Button, styled } from '@mui/material'

const Wrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginTop: '50px',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '83px',
  },
  [theme.breakpoints.up('lg')]: {},
}))

const Heading = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
    lineHeight: '40px',
    marginBottom: 16,
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 50,
    lineHeight: '60px',
    marginBottom: '40px',
  },
  [theme.breakpoints.up('lg')]: {},
}))

const SubHeading = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: 20,
    lineHeight: '30px',
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: '0.03em',
    maxWidth: '350px',
    margin: '0 auto',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 35,
    lineHeight: '50px',
    marginBottom: '50px',
  },
  [theme.breakpoints.up('lg')]: {},
}))

const Btn = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: 140,
  },
  [theme.breakpoints.up('md')]: {
    width: 187,
  },
  [theme.breakpoints.up('lg')]: {},
}))

const Buttons = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '30px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    gap: '30px',
  },
}))

export default function Content() {
  return (
    <Wrapper>
      <Container maxWidth="lg" disableGutters={true}>
        <Box sx={{ maxWidth: { md: '550px', sm: '100%' } }}>
          <Heading>
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontSize: 'inherit',
                fontWeight: 'bold',
                fontFamily: 'GothamPro',
              }}
            >
              Поделитесь своими результатами
            </Typography>
          </Heading>

          <SubHeading>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontSize: 'inherit',
                fontWeight: 300,
                fontFamily: 'GothamPro',
                textTransform: 'uppercase',
                color: '#AE8DE5',
              }}
            >
              И получите доверие большого количества инвесторов
            </Typography>
          </SubHeading>

          <Box>
            <Buttons>
              <Btn>
                <Button
                  variant="contained"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      background: '#5040B2',
                      boxShadow: '0 0 20px rgba(188, 79, 255, 0.7)',
                    },
                    borderRadius: '5px',
                    borderColor: '#AE8DE5',
                    background: '#5040B2',
                    width: '100%',
                    height: 50,
                    fontSize: '14px',
                    lineHeight: '13px',
                    fontWeight: 500,
                    fontFamily: 'GothamPro',
                    boxShadow: '0 0 20px rgba(188, 79, 255, 0.7)',
                  }}
                >
                  НАЧАТЬ
                </Button>
              </Btn>

              <Btn>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#C49BFF',
                    '&:hover': {
                      background: '#101C2B',
                      boxShadow: '0 0 20px rgba(188, 79, 255, 0.7)',
                    },
                    borderRadius: '5px',
                    borderColor: '#C49BFF',
                    background: '#101C2B',
                    width: '100%',
                    height: 50,
                    fontSize: '14px',
                    lineHeight: '13px',
                    fontWeight: 500,
                    fontFamily: 'GothamPro',
                    boxShadow: '0 0 20px rgba(188, 79, 255, 0.7)',
                  }}
                >
                  Я ТРЕЙДЕР
                </Button>
              </Btn>
            </Buttons>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  )
}
