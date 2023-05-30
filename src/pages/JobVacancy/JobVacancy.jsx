import { TypographyStylesProvider, Container, Flex, Card } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchVacancy } from '../../store/vacancySlice';
import { VacancyItem } from '../../components/VacancyItem/VacancyItem';
import { useParams } from 'react-router-dom';
import { useUpdateLocalStorage } from '../../hooks/useUpdateLocalStorage';
import { useStyles } from './style';

export const JobVacancy = () => {
  const dispatch = useDispatch();
  let { vacancyId } = useParams();
  const { vacancy } = useSelector((state) => state.vacancies);
  const { classes } = useStyles();
  const { handleAddToFavorite, handleDelFromFavorite, favoriteList } =
    useUpdateLocalStorage();
  useEffect(() => {
    dispatch(fetchVacancy(vacancyId));
  }, []);

  const isFavorite = favoriteList.find((id) => id === Number(vacancyId));

  return (
    <Container size="xl" sx={{ paddingTop: '40px' }}>
      <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
        {vacancy && (
          <VacancyItem
            item={vacancy}
            addToFavorite={handleAddToFavorite}
            delFromFavorite={handleDelFromFavorite}
            isFavorite={isFavorite}
          />
        )}
        <TypographyStylesProvider>
          <Card className={classes.card}>
            {vacancy && (
              <Flex
                className={classes.vacancyRichText}
                dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
              />
            )}
          </Card>
        </TypographyStylesProvider>
      </Flex>
    </Container>
  );
};
