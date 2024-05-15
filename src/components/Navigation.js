import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      // Set default language if none is stored
      i18n.changeLanguage('en'); // or your desired default language
    }
  }, []); // Run only once on component mount

  

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Store selected language in localStorage
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {t('welcome')}
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">{t('home')}</Button>
          <Button color="inherit" component={Link} to="/about">{t('about')}</Button>
          <Button color="inherit" component={Link} to="/projects">{t('projects')}</Button>
          <Button color="inherit" component={Link} to="/contact">{t('contact')}</Button>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={i18n.language}
            onChange={(event) => changeLanguage(event.target.value)}
            autoWidth
            style={{ color: 'inherit' }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="fa">FA</MenuItem>
            <MenuItem value="tr">TR</MenuItem> 
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
