import { Container, Flex, Pagination } from '@mantine/core';
import ListVacancies from '../../components/ListVacancies/ListVacancies';
import { useUpdateLocalStorage } from '../../hooks/useUpdateLocalStorage';
import { useLoadingFavorite } from '../../hooks/useLoadingFavorite';

export const Favorites = () => {
  const { handleAddToFavorite, handleDelFromFavorite } =
    useUpdateLocalStorage();

  const {
    favoriteVacancies,
    currentPage,
    countPages,
    isLoading,
    favoriteList,
    handlePagination,
  } = useLoadingFavorite();

  return (
    <Container sx={{ paddingTop: '40px' }} size="xl">
      <Flex sx={{ flexDirection: 'column', flexGrow: 1 }}>
        <ListVacancies
          list={favoriteVacancies}
          isLoading={isLoading}
          addToFavorite={handleAddToFavorite}
          delFromFavorite={handleDelFromFavorite}
          favoriteList={favoriteList}
        />
        <Pagination
          total={countPages}
          siblings={3}
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
    </Container>
  );
};
