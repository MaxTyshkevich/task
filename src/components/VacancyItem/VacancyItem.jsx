import { ActionIcon, Box, Card, List, Group, Text, Title } from '@mantine/core';

import { ReactComponent as StarIcon } from '../../icons/Star.svg';
import { ReactComponent as StarFavoriteIcon } from '../../icons/StarFavorite.svg';
import { ReactComponent as LocationIcon } from '../../icons/LocationIcon.svg';
import { ReactComponent as DotIcon } from '../../icons/dot.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './style';

export const VacancyItem = ({ k }) => {
  const { classes } = useStyles();
  const [isFavorit, setIsFavorit] = useState(false);
  console.log(k);

  let template = '';
  if (k.payment_from && k.payment_to) {
    template += `з/п ${k.payment_from} - ${k.payment_to} ${k.currency}`;
  } else if (k.payment_from === k.payment_to) {
    template += `з/п ${k.payment_from}  ${k.currency}`;
  }

  const handleFavoriteClick = () => {
    setIsFavorit(!isFavorit);
  };
  return (
    <Card className={classes.card} padding={24}>
      <ActionIcon
        onClick={handleFavoriteClick}
        sx={{
          position: 'absolute',
          top: 25,
          right: 25,
        }}
      >
        {isFavorit ? <StarFavoriteIcon /> : <StarIcon />}
      </ActionIcon>
      <Title order={3}>
        <Box component={NavLink} to={`./${k.id}`} className={classes.cardLink}>
          {k.profession}
        </Box>
      </Title>
      <Group>
        <Text className={classes.salary}>{template}</Text>
        <List center icon={<DotIcon />}>
          <List.Item className={classes.list}>{k.type_of_work.title}</List.Item>
        </List>
      </Group>
      <Text>
        <Group spacing={8}>
          <LocationIcon />
          <Text className={classes.text}>{k.town.title}</Text>
        </Group>
      </Text>
    </Card>
  );
};
