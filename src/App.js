import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Summary from './components/summary/Summary';
import './index.css';

const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header {...{ theme, toggleTheme }} />
        <Summary {...theme} />
        <Main {...theme} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
