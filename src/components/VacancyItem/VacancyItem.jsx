import { ActionIcon, Box, Card, List, Group, Text, Title } from '@mantine/core';

import { ReactComponent as StarIcon } from '../../icons/Star.svg';
import { ReactComponent as StarFavoriteIcon } from '../../icons/StarFavorite.svg';
import { ReactComponent as LocationIcon } from '../../icons/LocationIcon.svg';
import { ReactComponent as DotIcon } from '../../icons/dot.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './style';

export const VacancyItem = ({ item }) => {
  const { classes } = useStyles();
  const [isFavorit, setIsFavorit] = useState(false);
  console.log(`profession`, item.profession);
  let template = '';
  if (item.payment_from && item.payment_to) {
    template += `з/п ${item.payment_from} - ${item.payment_to} ${item.currency}`;
  } else if (item.payment_from === item.payment_to) {
    template += `з/п ${item.payment_from}  ${item.currency}`;
  }

  const handleFavoriteClick = () => {
    setIsFavorit(!isFavorit);
  };
  return (
    <Card
      className={classes.card}
      padding={24}
      data-elem={`vacancy-${item.id}`}
    >
      <ActionIcon
        onClick={handleFavoriteClick}
        data-elem={`vacancy-${item.id}`}
        sx={{
          position: 'absolute',
          top: 25,
          right: 25,
        }}
      >
        {isFavorit ? <StarFavoriteIcon /> : <StarIcon />}
      </ActionIcon>
      <Title order={3}>
        <Box
          component={NavLink}
          to={`/vacancy/${item.id}`}
          className={classes.cardLink}
        >
          {item.profession}
        </Box>
      </Title>
      <Group>
        <Text className={classes.salary}>{template}</Text>
        <List center icon={<DotIcon />}>
          <List.Item className={classes.list}>
            {item.type_of_work.title}
          </List.Item>
        </List>
      </Group>
      <Text>
        <Group spacing={8}>
          <LocationIcon />
          <Text className={classes.text}>{item.town.title}</Text>
        </Group>
      </Text>
    </Card>
  );
};
