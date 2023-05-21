import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: '12px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    color: '#232134',

    letterSpacing: '-0.02em',
  },
}));
