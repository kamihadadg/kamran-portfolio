// src/Home.js

import React from 'react';
import { Typography, Container, Grid, Paper, Button, Box, Avatar,IconButton  } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg'; // مسیر عکس پروفایل
import resumePDF from '../assets/KamiHadadResume.pdf';
import SocialMedia from '../components/SocialMedia';

const Home = () => {
  const { t, i18n } = useTranslation();

  const tech_data = t('tech_data', { returnObjects: true });
  if (!Array.isArray(tech_data)) {
    console.error("Expected tech_data to be an array but got:", tech_data);
    return null; // یا می‌توانید یک مقدار پیش‌فرض تنظیم کنید
  }

  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Roboto' : 'Helvetica'
    }}>
      <Container>
        {/* بخش معرفی */}
        <Grid container spacing={3} alignItems="center" justify="center" style={{ marginTop: '20px' }}>
          <Grid item xs={12} md={4}>
            <Avatar alt="Profile Picture" src={profilePic} sx={{ width: 200, height: 200, margin: '0 auto' }} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>{t('name')}</Typography>
            <Typography variant="h6" color="textSecondary">{t('title')}</Typography>
            <Typography variant="body1" paragraph>{t('bio')}</Typography>
            <Button variant="contained" color="primary" component={Link} to="/contact">
              {t('contact_me')}
            </Button>
            <Button variant="contained" color="secondary" component="a" href={resumePDF} target="_blank" style={{ marginLeft: '10px' }}>
              {t('download_resume')}
            </Button>
          </Grid>
        </Grid>

        {/* بخش تکنولوژی‌ها */}
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
          {t('technologies')}
        </Typography>
        <Grid container spacing={3}>
          {tech_data.map((tech, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">{tech.name}</Typography>
                <Typography variant="body1">{tech.description}</Typography>
                <Button color="primary" component="a" href={tech.link}>
                  {t('view_project')}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

          <SocialMedia/>

      </Container>
    </div>
  );
};

export default Home;
