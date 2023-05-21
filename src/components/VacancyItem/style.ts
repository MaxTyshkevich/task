import { createStyles, em, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: em(12),
    padding: em(24),
    border: `${rem(1)}px solid #EAEBED`,
    borderRadius: rem(12),
    color: '#232134',
  },

  cardLink: {
    fontWeight: 600,
    textDecoration: 'none',
    color: '#5E96FC',
  },
  salary: {
    fontSize: em(16),
    fontStyle: 'normal',
    fontWeight: 600,
  },
  list: {
    fontSize: em(16),
    fontStyle: 'normal',
    fontWeight: 400,
  },

  text: {
    fontSize: em(16),
    fontStyle: 'normal',
    fontWeight: 400,
  },
}));
