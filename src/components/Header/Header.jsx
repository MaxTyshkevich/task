import {
  createStyles,
  Header,
  Container,
  Group,
  em,
  Text,
} from '@mantine/core';

import { Logo } from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.fn.smallerThan(500)]: {
      justifyContent: 'space-around',
    },
  },

  links: {
    margin: '0 auto',
    marginLeft: 270,
    gap: em(60),
    [theme.fn.smallerThan(1000)]: {
      margin: '0 auto',
      gap: em(40),
    },
    [theme.fn.smallerThan(400)]: {
      gap: em(10),
    },
  },

  link: {
    fontSize: em(16),
    lineHeight: em(20),
    color: '#232134',
  },

  linkActive: {
    color: '#5E96FC',
  },
}));

export function HeaderSimple({ links }) {
  const { classes, cx } = useStyles();
  let { pathname } = useLocation();

  const items = links.map((link) => (
    <Text
      component={Link}
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: pathname === link.link,
      })}
    >
      {link.label}
    </Text>
  ));

  return (
    <Header height={84}>
      <Container className={classes.header} size="xl">
        <Logo />

        <Group spacing={60} className={classes.links}>
          {items}
        </Group>
      </Container>
    </Header>
  );
}
