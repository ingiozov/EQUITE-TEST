import React from 'react'
import Image from 'next/image'
import { Container, Button, Link, Grid, Box } from '@mui/material'

export default function Header() {
  const preventDefault = (event) => event.preventDefault()

  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid
          item
          md={7}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              position: 'relative',
              marginRight: { xs: 2 },
            }}
          >
            <Image src="/images/logo.png" width={48} height={56} />
          </Box>

          <Box
            sx={{
              typography: 'body2',
              '& > :not(style) + :not(style)': {
                ml: 6,
              },
              fontFamily: 'GothamPro',
            }}
            onClick={preventDefault}
          >
            <Link
              sx={{
                fontSize: '20px',
                lineHeight: '19px',
              }}
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'inline-block', lg: 'none' }}
            >
              EQUITE.IO
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'none', lg: 'inline-block' }}
            >
              ГЛАВНАЯ
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'none', lg: 'inline-block' }}
            >
              РЕЙТИНГИ
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'none', lg: 'inline-block' }}
            >
              БЛОГ
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'none', lg: 'inline-block' }}
            >
              PRO
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'none', lg: 'inline-block' }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: '#EEE4FF',
                  '&:hover': {
                    background: '#101C2B',
                    borderColor: 'white',
                  },
                  borderColor: '#EEE4FF',
                  borderRadius: '5px',
                  background: '#101C2B',
                  width: 190,
                  height: 40,
                  fontWeight: 500,
                  fontFamily: 'GothamPro',
                }}
              >
                ИНВЕСТОРУ
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item md={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              typography: 'body2',
              '& > :not(style) + :not(style)': {
                ml: 2,
              },
              fontFamily: 'GothamPro',
            }}
            onClick={preventDefault}
          >
            <Link href="#" underline="none" color="inherit">
              <Button
                sx={{
                  color: '#AE8DE5',
                  '&:hover': {
                    background: '#101C2B',
                  },
                  borderRadius: '5px',
                  background: '#101C2B',
                  width: 42,
                  minWidth: 42,
                  height: 40,
                  fontWeight: 500,
                  padding: 0,
                  fontFamily: 'GothamPro',
                }}
              >
                RU
              </Button>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'inline-block', lg: 'none' }}
            >
              <Button
                sx={{
                  color: '#AE8DE5',
                  '&:hover': {
                    background: '#101C2B',
                  },
                  borderRadius: '5px',
                  background: '#101C2B',
                  width: 42,
                  minWidth: 42,
                  height: 40,
                  fontWeight: 500,
                  padding: 0,
                  fontFamily: 'GothamPro',
                }}
              >
                <Image src="/images/menu.png" width={40} height={40} />
              </Button>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'none', lg: 'inline-block' }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: '#AE8DE5',
                  '&:hover': {
                    background: '#101C2B',
                    borderColor: '#AE8DE5',
                  },
                  borderRadius: '5px',
                  borderColor: '#AE8DE5',
                  background: '#101C2B',
                  width: 108,
                  height: 40,
                  fontWeight: 500,
                  fontFamily: 'GothamPro',
                }}
              >
                ВОЙТИ
              </Button>
            </Link>
            <Link
              href="#"
              underline="none"
              color="inherit"
              display={{ xs: 'none', lg: 'inline-block' }}
            >
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
                  width: 108,
                  height: 40,
                  fontWeight: 500,
                  fontFamily: 'GothamPro',
                  boxShadow: '0 0 20px rgba(188, 79, 255, 0.7)',
                }}
              >
                НАЧАТЬ
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
