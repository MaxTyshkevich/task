import { Title, Text } from '@mantine/core';
import { ReactComponent as LogoIcon } from '../../icons/Union.svg';
import { Link } from 'react-router-dom';
import { useStyles } from './style';

export const Logo = () => {
  const { classes } = useStyles();
  return (
    <Text className={classes.logo} component={Link} to="/job">
      <LogoIcon />
      <Title className={classes.logoText}>Jobored</Title>
    </Text>
  );
};
