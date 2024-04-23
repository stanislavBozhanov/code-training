import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PartOne from './components/PartOne';
import PartTwo from './components/PartTwo';
import App from './App';
import './index.css';
import CardCode from './components/CardCode';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/part-one/', element: <PartOne /> },
  { path: '/part-two/', element: <PartTwo /> },
  { path: '/part-two/card/:cardCode', element: <CardCode />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
