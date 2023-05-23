import { Button, TextInput } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../../store/filterSlice.js';
import { useEffect } from 'react';

export const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const searchInput = searchParams.get('keyword');
  const dispatch = useDispatch();
  const { select } = useSelector((state) => state.filters);

  useEffect(() => {
    if (searchInput) {
      dispatch(changeSearch(searchInput));
    }
  }, []);

  const HandleFind = () => {
    let objParams = {};
    for (const [key, value] of searchParams.entries()) {
      objParams[key] = value;
    }

    setSearchParams({
      ...objParams,
      page: 1,
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
