import { Box, Flex, Loader } from '@mantine/core';
import { VacancyItem } from '../VacancyItem/VacancyItem';

const ListVacancies = ({ list, isLoading }) => {
  return (
    <Flex direction={'column'} sx={{ marginTop: '16px' }} gap={16}>
      {isLoading && <Loader />}

      {list ? (
        list.map((item) => <VacancyItem k={item} key={item.id} />)
      ) : (
        <Box>Вакансий не найдено</Box>
      )}
    </Flex>
  );
};

export default ListVacancies;
