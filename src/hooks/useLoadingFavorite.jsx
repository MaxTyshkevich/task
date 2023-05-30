import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchFavoriteVacancies } from '../store/favoriteSlice';

export const useLoadingFavorite = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    favoriteVacancies,
    currentPage,
    favoriteList,
    isLoading,
    countPages,
  } = useSelector((state) => state.favorite);

  const handlePagination = (indexPage) => {
    const objParams = Object.fromEntries(searchParams.entries());

    setSearchParams({
      ...objParams,
      page: indexPage,
    });
  };

  useEffect(() => {
    if (favoriteList.length) {
      const objParams = Object.fromEntries(searchParams.entries());
      dispatch(fetchFavoriteVacancies(objParams));
    } else {
      navigate('/emptystate');
    }
  }, [dispatch, favoriteList.length, navigate, searchParams]);

  return {
    favoriteVacancies,
    currentPage,
    countPages,
    handlePagination,
    isLoading,
    favoriteList,
  };
};
