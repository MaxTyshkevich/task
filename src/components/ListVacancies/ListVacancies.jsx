import { Box, Flex, Loader } from '@mantine/core';
import { VacancyItem } from '../VacancyItem/VacancyItem';

const ListVacancies = ({
  list,
  isLoading,
  delFromFavorite,
  addToFavorite,
  favoriteList = [],
}) => {
  return (
    <Flex direction={'column'} sx={{ marginTop: '16px' }} gap={16}>
      {isLoading && <Loader />}

      {list ? (
        list.map((item) => {
          const isFavorite = Boolean(favoriteList.find((el) => el === item.id));
          return (
            <VacancyItem
              item={item}
              key={item.id}
              addToFavorite={addToFavorite}
              delFromFavorite={delFromFavorite}
              isFavorite={isFavorite}
            />
          );
        })
      ) : (
        <Box>Вакансий не найдено</Box>
      )}
    </Flex>
  );
};

export default ListVacancies;
