import { Container, Flex, Pagination } from '@mantine/core';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchFavoriteVacancies } from '../../store/VacancySlice';
import ListVacancies from '../../components/ListVacancies/ListVacancies';

export const Favorites = () => {
  const dispatch = useDispatch();
  let { search } = useLocation();
  const { favoriteList, isLoading, countPages } = useSelector(
    (state) => state.vac
  );

  useEffect(() => {
    dispatch(fetchFavoriteVacancies(search));
  }, [dispatch, search]);

  return (
    <Container sx={{ paddingTop: '40px' }} size="xl">
      <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
        <ListVacancies list={favoriteList} isLoading={isLoading} />
        <Pagination
          total={countPages}
          siblings={2}
          defaultValue={10}
          sx={{ marginTop: 20 }}
          position="center"
        />
      </Flex>
    </Container>
  );
};
