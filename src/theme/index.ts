import { MantineThemeOverride, em, rem } from '@mantine/core';
import '@fontsource/inter';
import '@fontsource/poppins';

export const Theme: MantineThemeOverride = {
  fontFamily: 'Inter',
  /*   colors: {
    gray: [
      '#232134',
      '#7B7C88',
      '#ACADB9',
      '#D5D6DC',
      '#EAEBED',
      '#F5F5F6',
      '#FFFFFF',
    ],

    blue: ['#DEECFF', '#C9E0FF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC'],
  }, */

  primaryColor: 'blue',

  fontSizes: {
    lg: rem(24),
  },

  components: {
    Header: {
      styles: {
        root: {
          borderBottom: 'none',
        },
      },
    },

    Button: {
      styles: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    Container: {
      defaultProps: {
        sizes: {
          xl: 1145,
        },
      },
    },
  },

  headings: {
    sizes: {
      h1: {
        fontWeight: 600,
        fontSize: em(24),
        lineHeight: em(36),
      },
      h2: {
        fontWeight: 700,
        fontSize: em(28),
        lineHeight: em(34),
      },
      h3: {
        fontWeight: 700,
        fontSize: em(20),
        lineHeight: em(20),
      },
      h4: {
        fontWeight: 700,
        fontSize: em(16),
        lineHeight: em(19.36),
      },
    },
  },
};
