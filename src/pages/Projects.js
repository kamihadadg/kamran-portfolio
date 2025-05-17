import React from 'react';
import { Typography, Container, Grid, Paper, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/SocialMedia';

const Projects = () => {
  
  const { t, i18n } = useTranslation();

  // Sample projects in English including the Trader Bot
  const projects = [
    {
      title: "Trader Bot",
      description: "Automated trading bot for digital asset management and investment strategies.",
      link: "https://kmsar.shop/"
    },
    {
      title: "Transport Management",
      description: "Automation system for Transfer like iranian car agency.",
      link: "/Assets/Release/Transport.zip", // File link for download
      isDownload: true // Adding a flag to differentiate downloadable content
    },
    {
      title: "Leather Factory Automation",
      description: "Automation system for leather manufacturing factories.",
      link: "/leather-factory-automation"
    },
    {
      title: "Currency Exchange Voucher Management",
      description: "System for managing currency exchange vouchers.",
      link: "/currency-exchange-voucher-management"
    },
    {
      title: "Distribution Network",
      description: "System for managing and optimizing distribution networks.",
      link: "/distribution-network"
    },
    {
      title: "Accounting System",
      description: "Comprehensive accounting system for businesses.",
      link: "/accounting-system"
    },
    {
      title: "Buy and Sell System",
      description: "Platform for managing buy and sell transactions.",
      link: "/buy-and-sell-system"
    },
    {
      title: "Inventory Management",
      description: "System for efficient inventory management.",
      link: "/inventory-management"
    }
  ];

  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Roboto' : 'Helvetica'
    }}>
      <Container>
   
        {/* Projects Section */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ marginTop: '40px', fontSize: '36px' }} // Adjust font size here
        >
          {t('projects')}
        </Typography>

        
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {project.title}
              </Typography>

                <Typography variant="body1" style={{ marginTop: '10px' }}>{project.description}</Typography>
                <Box mt={2}>
                  {project.isDownload ? (
                    <Button
                      color="primary"
                      component="a"
                      href={project.link}
                      download
                      variant="contained"
                      style={{ textTransform: 'none' }}
                    >
                      {t('download_project')}
                    </Button>
                  ) : (
                    <Button
                      color="primary"
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      style={{ textTransform: 'none' }}
                    >
                    {t('view_project')}
                  </Button>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box mt={5}>
          <SocialMedia />
        </Box>
      </Container>
    </div>
  );
};

export default Projects;
