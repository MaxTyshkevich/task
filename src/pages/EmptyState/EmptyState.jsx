import { useEffect } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { ReactComponent as ErrorImage } from '../../icons/ErrorImage.svg';
import { Text, Button, Center, Box, Container } from '@mantine/core';
import { useStyles } from './style';

export const EmptyState = () => {
  const error = useRouteError();
  const { classes } = useStyles();

  return (
    <Container size="xl" className={classes.container}>
      <Center className={classes.center} mx="auto">
        <ErrorImage />
        <Text className={classes.text}>Упс, здесь еще ничего нет!</Text>
        <Button component={Link} to="/job" className={classes.button}>
          Поиск Вакансий
        </Button>
      </Center>
    </Container>
  );
};
