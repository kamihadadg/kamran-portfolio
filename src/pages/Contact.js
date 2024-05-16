import React from 'react';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SocialMedia from '../components/SocialMedia';

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Calibri' : 'Helvetica'
    }}>
    <Container>
      <Typography variant="h4">{t('contact')}</Typography>
      <Typography variant="body1">
        {t('contact_intro')}
      </Typography>
      
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label={t('your_name')}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label={t('your_email')}
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={t('message')}
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            {t('my_details')}
          </Typography>
          <Typography variant="body2">
            {t('full_name')}: Kamran Hadad Marandi <br />
            {t('email')}: kamihadad@gmail.com <br />
            {t('phone')}: +98 912 471 8227
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            {t('send_message')}
          </Button>
        </Grid>
      </Grid>
      <SocialMedia/>
    </Container>
    </div>
  );
};

export default Contact;
