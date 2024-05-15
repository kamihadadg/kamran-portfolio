import React from 'react';
import { Typography, Container, Grid, Paper, Button, Box, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg'; // مسیر عکس پروفایل

const Home = () => {
  const { t, i18n } = useTranslation();

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
        </Grid>
      </Grid>

      {/* بخش پروژه‌ها */}
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
        {t('projects')}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">{t('project1_title')}</Typography>
            <Typography variant="body1">{t('project1_description')}</Typography>
            <Button color="primary" component="a" href="https://github.com/your-username/project1">
              {t('view_project')}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">{t('project2_title')}</Typography>
            <Typography variant="body1">{t('project2_description')}</Typography>
            <Button color="primary" component="a" href="https://github.com/your-username/project2">
              {t('view_project')}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">{t('project3_title')}</Typography>
            <Typography variant="body1">{t('project3_description')}</Typography>
            <Button color="primary" component="a" href="https://github.com/your-username/project3">
              {t('view_project')}
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* بخش شبکه‌های اجتماعی */}
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
        {t('follow_me')}
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button color="inherit" component="a" href="https://linkedin.com/in/kamran-hadad-marandi-995aa7162" target="_blank">
          LinkedIn
        </Button>
        <Button color="inherit" component="a" href="https://github.com/kamihadadg" target="_blank">
          GitHub
        </Button>
        {/* <Button color="inherit" component="a" href="https://twitter.com/your-twitter" target="_blank">
          Twitter
        </Button> */}
      </Box>
    </Container>
    </div>
  );
};

export default Home;
