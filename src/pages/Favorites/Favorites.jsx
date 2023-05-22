import { Container, Flex, Pagination } from '@mantine/core';
import { useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchVacancies } from '../../store/VacancySlice';
import ListVacancies from '../../components/ListVacancies/ListVacancies';
import { useUpdateLocalStorage } from '../../hooks/useUpdateLocalStorage';

export const Favorites = () => {
  const navigate = useNavigate();
  let { search } = useLocation();
  console.log({ search });
  const dispatch = useDispatch();
  const { favoriteList, addToFavorite, delFromFavorite } =
    useUpdateLocalStorage();
  const { vacancies, isLoading, countPages } = useSelector(
    (state) => state.vac
  );
  const [searchParams, setSearchParams] = useSearchParams();
  let page = +(searchParams.get('page') || 1);

  useEffect(() => {
    if (favoriteList.length) {
      dispatch(
        fetchVacancies(
          `${search ? search : '?'}&ids=${JSON.stringify(favoriteList)}`
        )
      );
    } else {
      navigate('/job/emptystate');
    }
  }, [dispatch, favoriteList, search]);

  const handlePagination = (currentPage) => {
    setSearchParams({
      page: currentPage,
    });
  };

  return (
    <Container sx={{ paddingTop: '40px' }} size="xl">
      <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
        <ListVacancies
          list={vacancies}
          isLoading={isLoading}
          addToFavorite={addToFavorite}
          delFromFavorite={delFromFavorite}
          favoriteList={favoriteList}
        />
        <Pagination
          total={countPages}
          siblings={2}
          value={page}
          defaultValue={10}
          sx={{ marginTop: 20 }}
          position="center"
          onChange={handlePagination}
        />
      </Flex>
    </Container>
  );
};
