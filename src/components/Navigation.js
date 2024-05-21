import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Set default language

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    } else {
      i18n.changeLanguage('en'); // or your desired default language
      setSelectedLanguage('en');
    }
  }, []); // Run only once on component mount

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    localStorage.setItem('i18nextLng', lng); // save selected language to localStorage
  };

  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Tahoma' : 'Helvetica'
    }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {t('welcome')}
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">{t('home')}</Button>
            <Button color="inherit" component={Link} to="/educate">{t('Educate')}</Button>
            <Button color="inherit" component={Link} to="/projects">{t('projects')}</Button>
            <Button color="inherit" component={Link} to="/customers">{t('Customers')}</Button>
            {/* <Button color="inherit" component={Link} to="/about">{t('about')}</Button> */}
            <Button color="inherit" component={Link} to="/contact">{t('contact')}</Button>
            <Select 
              labelId="language-select-label"
              id="language-select"
              value={selectedLanguage}
              onChange={(event) => changeLanguage(event.target.value)}
              autoWidth
              style={{ color: 'inherit' }}
            >
              <MenuItem key="en" value="en">EN</MenuItem>
              <MenuItem key="fa" value="fa">FA</MenuItem>
              <MenuItem key="tr" value="tr">TR</MenuItem> 
            </Select>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
