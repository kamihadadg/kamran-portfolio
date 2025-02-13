import React, { useState } from 'react';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import SocialMedia from '../components/SocialMedia';

const Contact = () => {
  const { t, i18n } = useTranslation();
  
  // State برای ذخیره مقادیر ورودی
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // تغییر مقادیر ورودی
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ارسال اطلاعات به ایمیل
  const handleSubmit = async (e) => {
    e.preventDefault();

    // استفاده از EmailJS برای ارسال ایمیل
    try {
      const response = await emailjs.send(
        'service_hfu8eqm',    // شناسه سرویس (دریافت از EmailJS)
        'template_fk16dep',    // شناسه الگو (دریافت از EmailJS)
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'ePdTcHlAQuNRufB2Q'         // شناسه کاربری (دریافت از EmailJS)
      );
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
