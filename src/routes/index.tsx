import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'donors', element: <div className="p-8">Donors page</div> },
      { path: 'emergency', element: <div className="p-8">Emergency page</div> },
    ],
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
