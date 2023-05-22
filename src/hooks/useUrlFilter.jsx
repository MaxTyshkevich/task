import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVacancies } from '../store/VacancySlice';
import { useSelector } from 'react-redux';

export const useUrlFilter = () => {
  const dispatch = useDispatch();
  const { vacancies, isLoading, countPages } = useSelector(
    (state) => state.vac
  );
  let [searchParams, setSearchParams] = useSearchParams();
  let { search } = useLocation();

  let page = +(searchParams.get('page') || 1);

  const handlePagination = (currentPage) => {
    let objParams = {};
    for (const [key, value] of searchParams.entries()) {
      objParams[key] = value;
    }

    setSearchParams({
      ...objParams,
      page: currentPage,
    });
  };

  useEffect(() => {
    dispatch(fetchVacancies(search));
  }, [dispatch, search]);

  return { vacancies, isLoading, countPages, page, handlePagination };
};
