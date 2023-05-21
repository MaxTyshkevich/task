import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  paper: {
    border: '1px solid #EAEBED',
    borderRadius: '12px',
    padding: '20px',
    minWidth: '315px',

    [theme.fn.smallerThan(900)]: {
      flexGrow: 1,
    },
  },
  groupMain: { justifyContent: 'space-between' },
  buttonSecondary: {
    color: '#ACADB9',
    padding: 0,
    fontSize: '14px',
    fontWeight: 500,
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#92C1FF',
      backgroundColor: 'transparent',
    },
    '&:active': {
      color: '#5E96FC',
      backgroundColor: 'transparent',
    },
  },
  select: {
    marginTop: '25px',

    item: {},
  },
  groupNumberInput: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  numberInput: {
    control: {
      border: 'none',
    },
  },

  button: {
    backgroundColor: theme.colors.blue[6],
  },
}));
