import { TypographyStylesProvider, Container, Flex, Card } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchVacancy } from '../../store/vacancySlice';
import { VacancyItem } from '../../components/VacancyItem/VacancyItem';
import { useParams } from 'react-router-dom';
import { useStyles } from './style';

export const JobVacancy = () => {
  let { vacancyId } = useParams();
  const { vacancy } = useSelector((state) => state.vac);

  console.log(vacancyId);
  const dispatch = useDispatch();
  const { classes } = useStyles();

  useEffect(() => {
    dispatch(fetchVacancy(vacancyId));
  }, []);

  return (
    <Container size="xl" sx={{ paddingTop: '40px' }}>
      <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
        {vacancy && <VacancyItem item={vacancy} />}
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
