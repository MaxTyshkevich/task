import { Container, Flex, Pagination } from '@mantine/core';

import { useSelector } from 'react-redux';
import ListVacancies from '../../components/ListVacancies/ListVacancies';

export const Favorites = () => {
  const { vacancies, isLoading } = useSelector((state) => state.vac);
  return (
    <Container sx={{ paddingTop: '40px' }} size="xl">
      <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
        <ListVacancies list={vacancies} isLoading={isLoading} />
        <Pagination
          total={120}
          siblings={2}
          defaultValue={10}
          sx={{ marginTop: 20 }}
          position="center"
        />
      </Flex>
    </Container>
  );
};
