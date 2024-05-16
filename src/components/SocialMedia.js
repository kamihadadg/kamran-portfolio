// src/components/SocialMedia.js

import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaTelegram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SocialMedia = () => {
  const { t } = useTranslation();

  const iconSize = 40; // اندازه آیکون‌ها
  const iconStyle = { margin: '0 0.0005px' }; // فاصله بین آیکون‌ها

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
        {t('follow_me')}
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton color="inherit" component="a" href="https://linkedin.com/in/kamran-hadad-marandi-995aa7162" target="_blank" style={iconStyle}>
          <FaLinkedin size={iconSize} color="#0e76a8" />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://github.com/kamihadadg" target="_blank" style={iconStyle}>
          <FaGithub size={iconSize} color="#333" />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://youtube.com/@KamranMarandi" target="_blank" style={iconStyle}>
          <FaYoutube size={iconSize} color="#c4302b" />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://instagram.com/kamihadad2019" target="_blank" style={iconStyle}>
          <FaInstagram size={iconSize} color="#E1306C" />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://telegram.me/kamihadad" target="_blank" style={iconStyle}>
          <FaTelegram size={iconSize} color="#0088cc" />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://wa.me/kamihadad" target="_blank" style={iconStyle}>
          <FaWhatsapp size={iconSize} color="#25D366" />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://twitter.com/kamihadad" target="_blank" style={iconStyle}>
          <FaTwitter size={iconSize} color="#1DA1F2" />
        </IconButton>
      </Box>
    </div>
  );
};

export default SocialMedia;








// src/components/SocialMedia.js

// import React from 'react';
// import { Typography, Box, IconButton } from '@mui/material';
// import { LinkedIn, GitHub, YouTube, Instagram, Telegram, WhatsApp, Twitter } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';

// const SocialMedia = () => {
//   const { t } = useTranslation();

//   return (
//     <div>
//       <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
//         {t('follow_me')}
//       </Typography>
//       <Box display="flex" justifyContent="center">
//         <IconButton color="inherit" component="a" href="https://linkedin.com/in/kamran-hadad-marandi-995aa7162" target="_blank">
//           <LinkedIn fontSize="large" />
//         </IconButton>
//         <IconButton color="inherit" component="a" href="https://github.com/kamihadadg" target="_blank">
//           <GitHub fontSize="large" />
//         </IconButton>
//         <IconButton color="inherit" component="a" href="https://youtube.com/@KamranMarandi" target="_blank">
//           <YouTube fontSize="large" />
//         </IconButton>
//         <IconButton color="inherit" component="a" href="https://instagram.com/kamihadad2019" target="_blank">
//           <Instagram fontSize="large" />
//         </IconButton>
//         <IconButton color="inherit" component="a" href="https://telegram.me/kamihadad" target="_blank">
//           <Telegram fontSize="large" />
//         </IconButton>
//         <IconButton color="inherit" component="a" href="https://wa.me/kamihadad" target="_blank">
//           <WhatsApp fontSize="large" />
//         </IconButton>
//         <IconButton color="inherit" component="a" href="https://twitter.com/kamihadad" target="_blank">
//           <Twitter fontSize="large" />
//         </IconButton>
//       </Box>
//     </div>
//   );
// };

// export default SocialMedia;
