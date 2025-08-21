
import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import MainLoading from '../shared/components/mainloading/MainLoading'

const MainLayout = lazy(() => import('../layout/MainLayout'))
const Home = lazy(() => import('../features/home/pages/Home'))
const Bookmark = lazy(() => import('../features/bookmark/pages/Bookmark'))
const Movies = lazy(() => import('../features/movies/pages/Movies'))
const Search = lazy(() => import('../features/search/pages/Search'))

const Casts = lazy(() => import('../features/cast/pages/Casts'))
const CastDetail = lazy(() => import('../features/cast/pages/CastDetail'))
const MovieMoments = lazy(() => import('../features/movies/pages/MovieMoments'))
const NotFound = lazy(() => import('../features/notfound/pages/NotFound'))
const MovieDetails = lazy(() => import('../features/movies/pages/MovieDetails'))

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'bookmark', element: <Bookmark /> },
        { path: 'movies', element: <Movies /> },
        { path: 'search', element: <Search /> },
        { path: 'cast/:id', element: <CastDetail /> },
        {
          path: 'movie/:id',
          element: <MovieDetails />,
          children: [
            { index: true, element: <Casts /> },
            { path: 'moments', element: <MovieMoments /> },
          ],
        },
      ],
    },
    { path: '*', element: <NotFound /> },
  ])

  return (
    <Suspense fallback={<MainLoading/>}>
      {routes}
    </Suspense>
  )
}

export default React.memo(AppRoutes)