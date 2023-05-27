import { Container, Flex, Pagination } from '@mantine/core';
import { Search } from '../../components/Search/Search';
import { Filters } from '../../components/Filters/Filters';
import ListVacancies from '../../components/ListVacancies/ListVacancies';
import { useUpdateLocalStorage } from '../../hooks/useUpdateLocalStorage';
import { useUrlFilter } from '../../hooks/useUrlFilter';

export const JobSearch = () => {
  const { favoriteList, addToFavorite, delFromFavorite } =
    useUpdateLocalStorage();

  const { vacancies, isLoading, countPages, page, handlePagination } =
    useUrlFilter();

  return (
    <Container sx={{ paddingTop: '40px' }} size="xl">
      <Flex gap={28} wrap="wrap" sx={{ alignItems: 'flex-start' }}>
        <Filters />
        <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
          <Search />
          <ListVacancies
            list={vacancies}
            isLoading={isLoading}
            addToFavorite={addToFavorite}
            delFromFavorite={delFromFavorite}
            favoriteList={favoriteList}
          />
          <Pagination
            total={countPages}
            siblings={1}
            boundaries={0}
            value={page}
            sx={{ marginTop: 40 }}
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
