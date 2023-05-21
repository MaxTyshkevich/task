import { Button, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../../store/filterSlice.js';
export const Search = () => {
  const dispatch = useDispatch();
  const { categories, select, maxSalary, minSalary } = useSelector(
    (state) => state.filters
  );

  const HandleFind = () => {
    console.log('find:');
  };

  return (
    <TextInput
      sx={{ input: { height: '48px' } }}
      icon={<IconSearch size="0.8rem" stroke={1.5} />}
      radius="md"
      size="md"
      rightSection={
        <Button sx={{ marginRight: 10 }} onClick={() => HandleFind()}>
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
