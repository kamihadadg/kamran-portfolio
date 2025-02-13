import React from 'react';
import { Typography, Container, Grid, Paper, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/SocialMedia';

const Customers = () => {
  
  const { t, i18n } = useTranslation();

  // Adding customers
  const customers = [
    {
      name: "Mofid Leather",
      description: "A leather factory with extensive experience in producing high-quality leather.",
      link: "https://arkamlc.com/"
    },
    {
      name: "Mohajer Leather",
      description: "One of the pioneers in the leather industry using modern technologies.",
      link: "https://arkamlc.com/"
    },
    {
      name: "Bank Karafarin Exchange",
      description: "A reputable exchange with excellent services in currency trading.",
      link: "https://www.middleeastbank.ir/"
    },
    {
      name: "Saye Transportation Institute",
      description: "A reputable institute in the field of transportation and goods delivery.",
      link: "https://arkamlc.com/"
    }
  ];

  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Roboto' : 'Helvetica'
    }}>
      <Container>

        {/* Customers Section */}
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
          {t('customers')}
        </Typography>
        <Grid container spacing={3}>
          {customers.map((customer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6" style={{ fontSize: '24px', fontWeight: 'bold' }}>{customer.name}</Typography>
                <Typography variant="body1">{customer.description}</Typography>
                <Button color="primary" component="a" href={customer.link} target="_blank">
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
