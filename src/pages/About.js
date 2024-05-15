import React from 'react';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        {t('about')}
      </Typography>
      <Typography variant="body1">
        {t('about_full_text')}
      </Typography>
    </Container>
  );
};

export default About;
