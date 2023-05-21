import { Container, Flex, Pagination } from '@mantine/core';
import { Search } from '../../components/Search/Search';

import { Filters } from '../../components/Filters/Filters';
import { useEffect } from 'react';

import ListVacancies from '../../components/ListVacancies/ListVacancies';
import { useDispatch } from 'react-redux';
import { fetchVacancies } from '../../store/VacancySlice';
import { useSelector } from 'react-redux';

export const JobSearch = () => {
  const dispatch = useDispatch();
  const { vacancies, isLoading } = useSelector((state) => state.vac);
  useEffect(() => {
    dispatch(fetchVacancies());
  }, [dispatch]);

  return (
    <Container sx={{ paddingTop: '40px' }} size="xl">
      <Flex gap={28} wrap="wrap" sx={{ alignItems: 'flex-start' }}>
        <Filters />
        <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
          <Search />
          <ListVacancies list={vacancies} isLoading={isLoading} />
          <Pagination
            total={120}
            siblings={2}
            defaultValue={10}
            sx={{ marginTop: 20 }}
            position="center"
          />
        </Flex>
      </Flex>
    </Container>
  );
};
