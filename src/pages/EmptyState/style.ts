import { createStyles, em } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100vh',
  },
  center: {
    flexDirection: 'column',
    gap: em(32),
  },
  text: {
    fontWeight: 700,
    fontSize: em(24),
    lineHeight: em(29),

    color: '#343A40',
  },

  button: {
    fontWeight: 600,
    fontsize: em(14),
    lineheight: em(22),

    color: '#3B7CD3',
    padding: `${em(10)} ${em(24)}`,
    borderRadius: em(8),
    background: '#DEECFF',
  },
}));
