
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const MainLayout = lazy(() => import('../layout/MainLayout'))
const Home = lazy(() => import('../features/home/pages/Home'))
const Bookmark = lazy(() => import('../features/bookmark/pages/Bookmark'))
const Movies = lazy(() => import('../features/movies/pages/Movies'))
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
            {path: 'movie/:id', element:<MovieDetails/>},
        ]
    }
  ])
    
  
}

export default React.memo(AppRoutes)