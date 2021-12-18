import { styled } from '@mui/material'
import Header from '../components/Header'
import Content from '../components/Content'
import Pagin from '../components/Pagin'
import Logos from '../components/Logos'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
})

const Hero = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    backgroundPosition: 'bottom, top 360px  right -140px',
    backgroundSize: '2350px 480px, 1025px 480px',
    backgroundRepeat: 'no-repeat',
    mixBlendMode: 'multiply',
    padding: '10px',
  },
  [theme.breakpoints.up('md')]: {
    backgroundPosition: 'bottom, top right',
    backgroundSize: '100%, auto',
    backgroundRepeat: 'no-repeat',
    mixBlendMode: 'multiply',
    padding: '10px',
  },
  [theme.breakpoints.up('lg')]: {},
}))

export default function Home() {
  return (
    <Hero
      sx={{
        backgroundColor: '#101C2B',
        backgroundImage: 'url(/images/lines.png), url(/images/hero.png)',

        fontFamily: 'GothamPro',
        fontWeight: 400,
        color: 'white',
        minHeight: 962,
        paddingTop: 1,
      }}
    >
      <ThemeProvider theme={theme}>
        <Header />
        <Content />
        <Pagin />
        <Logos />
      </ThemeProvider>
    </Hero>
  )
}
