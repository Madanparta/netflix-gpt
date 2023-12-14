import React from 'react';
import Body from './screen/Body'
import Browser from "./screen/Browser"

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {




  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/browser",
      element:<Browser/>
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
