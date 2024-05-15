import React from 'react';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';


const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Calibri' : 'Helvetica'
    }}>
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        {t('about')}
      </Typography>
      <Typography variant="body1">
        {t('about_full_text')}
      </Typography>
    </Container>
    </div>
  );
};

export default About;
