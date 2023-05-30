import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVacancies } from '../store/vacancySlice';
import { useSelector } from 'react-redux';

export const useLoadingVacancies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { vacancies, isLoading, countPages, currentPage } = useSelector(
    (state) => state.vacancies
  );

  const dispatch = useDispatch();

  const handlePagination = (indexPage) => {
    const objParams = Object.fromEntries(searchParams.entries());

    setSearchParams({
      ...objParams,
      page: indexPage,
    });
  };

  useEffect(() => {
    let objParams = Object.fromEntries(searchParams.entries());

    dispatch(fetchVacancies(objParams));
  }, [dispatch, searchParams]);

  return { vacancies, isLoading, countPages, currentPage, handlePagination };
};
