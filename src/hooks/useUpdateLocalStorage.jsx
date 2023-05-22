import { useEffect, useState } from 'react';

export const useUpdateLocalStorage = () => {
  const getListFromLocalStorage = () => {
    let favoriteList = localStorage.getItem('favoriteList');
    if (favoriteList) {
      favoriteList = JSON.parse(favoriteList);
    }
    return favoriteList || [];
  };

  const [favoriteList, setFavoriteList] = useState(getListFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    /*  return () => {
      localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    }; */
  }, [favoriteList]);

  const addToFavorite = (elemId) => {
    setFavoriteList([...favoriteList, elemId]);
  };

  const delFromFavorite = (elemId) => {
    const updateList = favoriteList.filter((el) => el !== elemId);
    setFavoriteList([...updateList]);
  };

  return {
    addToFavorite,
    delFromFavorite,
    favoriteList,
  };
};
