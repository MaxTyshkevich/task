import { useEffect } from 'react';
import {
  addToFavorite,
  delFromFavorite,
  setFavoriteList,
} from '../store/favoriteSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const useUpdateLocalStorage = () => {
  const { favoriteList } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  }, [favoriteList]);

  const handleAddToFavorite = (elemId) => {
    dispatch(addToFavorite(elemId));
  };

  const handleDelFromFavorite = (elemId) => {
    dispatch(delFromFavorite(elemId));
  };

  return {
    handleAddToFavorite,
    handleDelFromFavorite,
    favoriteList,
  };
};
