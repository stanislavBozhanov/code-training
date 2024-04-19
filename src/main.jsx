import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PartOne from './components/PartOne';
import PartTwo from './components/PartTwo';
import App from './App';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/part-one/', element: <PartOne /> },
  { path: '/part-two/', element: <PartTwo /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
