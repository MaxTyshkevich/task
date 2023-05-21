import { createStyles, em } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    border: '1px solid #EAEBED',
    borderRadius: em(12),
    background: '#FFFFFF',
  },

  vacancyRichText: {
    padding: em(24),
    flexDirection: 'column',
    'ul + p , p:nth-child(3)': {
      color: '#232134',
      fontWeight: 700,
      fontSize: em(20),
      lineHeight: em(20),
    },
    'p , p:last-child': {
      fontWeight: 400,
      fontSize: em(16),
      lineHeight: em(22),
    },
  },
}));

/* 
'p , p:last-child'
*/
