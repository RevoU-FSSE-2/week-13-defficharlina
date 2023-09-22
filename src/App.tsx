import AppProvider from './Provider/AppProvider'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Register, Category, CategoryEdit, CategoryNew } from './pages'
import { PublicLayout } from './layouts'

function App() {

  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/category/:id',
          element: <Category />
        },
      ]
    }
  /*  {
      element: <AnotherLayout />,
      children: [
        {
          path: '/login',
          element: <>login page</>
        },
        {
          path: '/register',
          element: <>register page</>
        }
      ] 
    } */
  ])

  return (
    // cara lama tapi masih di pakai
    // <BrowserRouter>
    //   <AppProvider>
    //     <Routes>
    //       <Route element={<PublicLayout />}>
    //         <Route path={'/'} element={<Home />}/>
    //         <Route path={'/product'} element={<Product />} />
    //         <Route path={'/profile'} element={<Profile />} />
    //       </Route>
    //     </Routes>
    //   </AppProvider>
    // </BrowserRouter>
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
  )
}

export default App



