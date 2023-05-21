import {
  Button,
  Group,
  NumberInput,
  Paper,
  Select,
  Title,
  em,
} from '@mantine/core';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/filterSlice';
import { useDispatch } from 'react-redux';
import { useStyles } from './style';
import {
  changeMinSalary,
  changeSelect,
  changechangeMaxSalary,
  resetFilter,
} from '../../store/filterSlice.js';
import { ReactComponent as ArrayDown } from '../../icons/ArrayDown.svg';
import { fetchVacancies } from '../../store/VacancySlice';
export const Filters = () => {
  const { classes } = useStyles();
  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { categories, select, maxSalary, minSalary, selectCategories } =
    useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSumbit = (event) => {
    event.preventDefault();

    dispatch(
      fetchVacancies({
        keyword: select,
        payment_from: minSalary,
        payment_to: maxSalary,
      })
    );
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={(event) => handleSumbit(event)}>
        <Group className={classes.groupMain}>
          <Title order={3}>Фильтры</Title>
          <Button
            className={classes.buttonSecondary}
            variant="subtle"
            type="reset"
            rightIcon={<CloseIcon />}
            onClick={() => dispatch(resetFilter())}
          >
            Сбросить все
          </Button>
        </Group>
        <Select
          /* initiallyOpened={true}*/
          value={selectCategories}
          onChange={(value) => dispatch(changeSelect(value))}
          className={classes.select}
          label={
            <Title order={3} sx={{ marginBottom: 8 }}>
              Отрасль
            </Title>
          }
          dropdownPosition="bottom"
          placeholder="Выберете отрасль"
          data={categories.map((category) => ({
            value: category.key,
            label: category.title,
          }))}
          rightSection={<ArrayDown size="1rem" />}
        />
        <Group className={classes.groupNumberInput} mt={20} spacing={8}>
          <NumberInput
            className={classes.numberInput}
            defaultValue={0}
            styles={{
              input: {
                height: em(48),
              },
              control: {
                border: 'none',
              },
            }}
            value={minSalary}
            onChange={(value) => dispatch(changeMinSalary(value))}
            type="number"
            placeholder="От"
            label={
              <Title order={3} sx={{ marginBottom: 8 }}>
                Оклад
              </Title>
            }
          />
          <NumberInput
            className={classes.numberInput}
            defaultValue={0}
            value={maxSalary}
            onChange={(value) => dispatch(changechangeMaxSalary(value))}
            placeholder="До"
            type="number"
            styles={{
              input: {
                height: em(48),
              },
              control: {
                border: 'none',
              },
            }}
          />
        </Group>

        <Group mt={20}>
          <Button className={classes.button} type="submit" size="md" fullWidth>
            Применить
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
