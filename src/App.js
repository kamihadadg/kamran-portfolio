import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Educate from './pages/Educate';
import Customers from './pages/Customers';
import theme from './theme';
import './i18n';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/educate" element={<Educate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
