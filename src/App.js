import { Container, CssBaseline } from '@mui/material';
import Navbar from './components/header/Navbar';
import Hero from './components/hero/Hero';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from './configs/themeConfigs';
import { useState } from 'react';
import About from './components/main/About';
import Skills from './components/main/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/main/Work';
import Contact from './components/main/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [mode, setMode] = useState('dark');

  const darkModeTheme = createTheme(getDesignTokens(mode));
  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <header className=' w-full text-Purple py-2 px-4 bg-lightPurple'>
        <Navbar setMode={setMode} />
      </header>
      <Container>
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Work />
          <Contact />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
