import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SocialMedia from '../components/SocialMedia';

const Contact = () => {
  const { t, i18n } = useTranslation();
  
  // State برای ذخیره مقادیر ورودی
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw9N6EA6W4jBFszQXuQnqgnXuc3qHe-dQsxmU0nACPAgZdjSKAuuXq-tYqouV7606xr/exec";  // لینک اسکریپت خودت را جایگزین کن

  // تغییر مقادیر ورودی
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ارسال اطلاعات به Google Forms از طریق Apps Script
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(GOOGLE_SCRIPT_URL, formData);
      alert("✅ پیام با موفقیت ارسال شد!");
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error("❌ خطا در ارسال پیام:", error);
      alert("⚠️ خطا در ارسال پیام!");
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
                name="name"
                label={t('your_name')}
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label={t('your_email')}
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                label={t('message')}
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                margin="normal"
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                {t('send_message')}
              </Button>
            </Grid>
          </Grid>
        </form>

        <SocialMedia />
      </Container>
    </div>
  );
};

export default Contact;
