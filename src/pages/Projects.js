import React from 'react';
import { Typography, Container, Grid, Paper, Button, Box, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/SocialMedia';
const Projects = () => {
  
  const { t, i18n } = useTranslation();

  const projects = t('project_data', { returnObjects: true });


  return (
    <div style={{
      direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
      fontFamily: i18n.language === 'fa' ? 'Roboto' : 'Helvetica'
    }}>
      <Container>
   
        {/* بخش پروژه‌ها */}
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
          {t('projects')}
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body1">{project.description}</Typography>
                <Button color="primary" component="a" href={project.link}>
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

export default Projects;



