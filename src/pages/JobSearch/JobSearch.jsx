import { Container, Flex, Pagination } from '@mantine/core';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Search } from '../../components/Search/Search';
import { Filters } from '../../components/Filters/Filters';
import { useEffect } from 'react';
import ListVacancies from '../../components/ListVacancies/ListVacancies';
import { useDispatch } from 'react-redux';
import { fetchVacancies } from '../../store/VacancySlice';
import { useSelector } from 'react-redux';

export const JobSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let { search } = useLocation();
  let page = +(searchParams.get('page') || 1);
  console.log({ searchParams });

  const dispatch = useDispatch();
  const { vacancies, isLoading, countPages } = useSelector(
    (state) => state.vac
  );

  useEffect(() => {
    dispatch(fetchVacancies(search));
  }, [dispatch, search]);

  return (
    <Container sx={{ paddingTop: '40px' }} size="xl">
      <Flex gap={28} wrap="wrap" sx={{ alignItems: 'flex-start' }}>
        <Filters />
        <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
          <Search />
          <ListVacancies list={vacancies} isLoading={isLoading} />
          <Pagination
            total={countPages}
            siblings={2}
            value={page}
            sx={{ marginTop: 20 }}
            position="center"
            onChange={(currentPage) =>
              setSearchParams({ ...searchParams, page: currentPage })
            }
          />
        </Flex>
      </Flex>
    </Container>
  );
};
