
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const MainLayout = lazy(() => import('../layout/MainLayout'))
const Home = lazy(() => import('../features/home/pages/Home'))
const Bookmark = lazy(() => import('../features/bookmark/pages/Bookmark'))
const Movies = lazy(() => import('../features/movies/pages/Movies'))
const Search = lazy(() => import('../features/search/pages/Search'))

const Casts = lazy(() => import('../features/cast/pages/Casts'))
const MovieMoments = lazy(() => import('../features/movies/pages/MovieMoments'))
const NotFound = lazy(() => import('../features/notfound/pages/NotFound'))
const MovieDetails = lazy(() => import('../features/movies/pages/MovieDetails'))

const AppRoutes = () => {
  return  useRoutes([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {index: true, element:<Home/>},
            {path: 'bookmark', element:<Bookmark/>},
            {path: 'movies', element:<Movies/>},
            {path: 'search', element:<Search/>},
            {path: 'movie/:id', 
              element:<MovieDetails/>,
              children: [
                {
                  index: true, element: <Casts/>
                },
                {
                  path: 'moments',
                  element: <MovieMoments/>
                }
              ]
            },
        ]
    },
    {
      path: '*',
      element: <NotFound/>,
    }
  ])
    
  
}

export default React.memo(AppRoutes)