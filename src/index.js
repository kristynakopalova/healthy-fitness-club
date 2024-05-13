import React from 'react';
import './index.css';
import { App } from './App';
import { Home } from './components/home/Home';
import { EntryForm } from './components/entry-form/EntryForm';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/entryform',
    element: <EntryForm />,
  },
]);

createRoot(document.querySelector('#root')).render(
  <RouterProvider router={router} />,
);
