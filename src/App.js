import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage';
import AppBarComponent from './components/AppBarComponent';
import LoadingPage from './routes/LoadingPage';

const Dashboard = lazy(() => import('./routes/Dashboard'));

const Profile = lazy(() => import('./routes/Profile'));
const CustomCategories = lazy(() => import('./routes/CustomCategories'));
const Error404Page = lazy(() => import('./routes/Error404Page'));

function App() {
  const [addingExpenseIsOpen, setAddingExpenseIsOpen] = useState(false);

  return (
    <Router>
      <AppBarComponent setAddingExpenseIsOpen={setAddingExpenseIsOpen} />
      <Routes>
        <Route path="/" element={
          <Homepage
            addingExpenseIsOpen={addingExpenseIsOpen}
            setAddingExpenseIsOpen={setAddingExpenseIsOpen}
          />
        } />

        <Route path="/profile" element={
          <Suspense fallback={<LoadingPage />}>
            <Profile />
          </Suspense>
        } />
        <Route path="/profile/custom-categories" element={
          <Suspense fallback={<LoadingPage />}>
             <CustomCategories />
          </Suspense>
        } />

        <Route path="/dashboard" element={
          <Suspense fallback={<LoadingPage />}>
            <Dashboard />
          </Suspense>
        } />



        <Route path="*" element={
          <Suspense fallback={<LoadingPage />}>
            <Error404Page />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;