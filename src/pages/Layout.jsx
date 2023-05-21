import { Outlet } from 'react-router-dom';
import { Box, useMantineTheme } from '@mantine/core';
import { instance } from '../api/index.js';
import { HeaderSimple } from '../components/Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuthorization } from '../store/authSlice.js';

export const Layout = () => {
  /* const theme = useMantineTheme();
  console.log({ theme }); */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthorization());
  }, [dispatch]);

  return (
    <>
      <HeaderSimple
        links={[
          { link: '/', label: 'Поиск Вакансий' },
          { link: '/favorites', label: 'Избранное' },
        ]}
      />
      <Box
        sx={{ backgroundColor: '#F7F7F8' }}
        style={{ minHeight: `calc(100vh - 84px)` }}
      >
        <Outlet />
      </Box>
    </>
  );
};
