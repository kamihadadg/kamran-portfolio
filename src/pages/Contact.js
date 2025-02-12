import React, { useState } from 'react';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SocialMedia from '../components/SocialMedia';
import axios from 'axios';

const Contact = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your Google Apps Script URL
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbw2YU09f7TC4jES2VIyEHrzbXqDPMj51sJech7ZFeXE/exec';

    try {
      const response = await axios.post(googleScriptUrl, formData);
      if (response.data.result === 'success') {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('There was an issue sending the message. Please try again.');
      }
    } catch (error) {
      setStatus('There was an error submitting the form.');
    }
  };

  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Calibri' : 'Helvetica'
    }}>
      <Container>
        <Typography variant="h4">{t('contact')}</Typography>
        <Typography variant="body1">{t('contact_intro')}</Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label={t('your_name')}
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={t('your_email')}
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{t('my_details')}</Typography>
              <Typography variant="body2">
                <h3>{t('full_name')}: Kamran Hadad Marandi <br />
                  {t('email')}: kamihadad@gmail.com <br />
                  {t('phone')}: +98 912 471 8227
                </h3>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                {t('send_message')}
              </Button>
            </Grid>
          </Grid>
        </form>

        {status && <Typography variant="body1">{status}</Typography>}

        <SocialMedia />
      </Container>
    </div>
  );
};

export default Contact;
