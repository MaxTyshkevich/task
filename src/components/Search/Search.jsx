import { Button, TextInput } from '@mantine/core';
import { useSearchParams, useLocation } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../../store/filterSlice.js';

export const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const searchInput = searchParams.get('keyword');
  const dispatch = useDispatch();
  const { categories, select, maxSalary, minSalary } = useSelector(
    (state) => state.filters
  );

  const HandleFind = () => {
    setSearchParams({
      ...searchParams,
      keyword: select,
    });
  };

  return (
    <TextInput
      data-elem="search-input"
      sx={{ input: { height: '48px' } }}
      icon={<IconSearch size="0.8rem" stroke={1.5} />}
      radius="md"
      size="md"
      rightSection={
        <Button
          data-elem="search-button"
          sx={{ marginRight: 10 }}
          onClick={() => HandleFind()}
        >
          Поиск
        </Button>
      }
      rightSectionWidth={'auto'}
      placeholder="Введите название вакансии"
      value={select}
      onChange={(event) => dispatch(changeSearch(event.target.value))}
    />
  );
};
