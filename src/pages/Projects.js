// src/pages/Home.js
import React from 'react';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography variant="h4">{t('welcome')}</Typography>
      <Typography variant="body1">{t('about')}</Typography>
    </Container>
  );
};

export default Projects;
