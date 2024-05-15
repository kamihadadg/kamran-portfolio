import React from 'react';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
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
            {t('full_name')}: John Doe <br />
            {t('email')}: johndoe@example.com <br />
            {t('phone')}: +1234567890
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            {t('send_message')}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
