import React from 'react';
import { Typography, Container, Grid, Paper, Button, Box, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/SocialMedia';
const Customers = () => {
  
  const { t, i18n } = useTranslation();


  const customers = t('customer_data', { returnObjects: true });

  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Roboto' : 'Helvetica'
    }}>
      <Container>

        {/* بخش مشتریان */}
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
          {t('customers')}
        </Typography>
        <Grid container spacing={3}>
          {customers.map((customer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">{customer.name}</Typography>
                <Typography variant="body1">{customer.description}</Typography>
                <Button color="primary" component="a" href={customer.link}>
                  {t('view_customer')}
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

export default Customers;



