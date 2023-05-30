import { Container, Flex, Pagination } from '@mantine/core';
import { Search } from '../../components/Search/Search';
import { Filters } from '../../components/Filters/Filters';
import ListVacancies from '../../components/ListVacancies/ListVacancies';
import { useUpdateLocalStorage } from '../../hooks/useUpdateLocalStorage';
import { useLoadingVacancies } from '../../hooks/useLoadingVacancies';

export const JobSearch = () => {
  const { favoriteList, handleAddToFavorite, handleDelFromFavorite } =
    useUpdateLocalStorage();

  const { vacancies, isLoading, countPages, currentPage, handlePagination } =
    useLoadingVacancies();

  return (
    <Container sx={{ paddingTop: '40px' }} size="xl">
      <Flex gap={28} wrap="wrap" sx={{ alignItems: 'flex-start' }}>
        <Filters />
        <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
          <Search />
          <ListVacancies
            list={vacancies}
            isLoading={isLoading}
            addToFavorite={handleAddToFavorite}
            delFromFavorite={handleDelFromFavorite}
            favoriteList={favoriteList}
          />
          <Pagination
            total={countPages}
            siblings={1}
            boundaries={0}
            value={currentPage}
            sx={{ marginTop: 40, marginBottom: 42 }}
            position="center"
            onChange={handlePagination}
            styles={{
              dots: { display: 'none' },
            }}
            spacing="sm"
          />
        </Flex>
      </Flex>
    </Container>
  );
};
