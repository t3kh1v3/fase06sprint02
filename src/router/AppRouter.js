import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { FarmerProfile } from '../pages/farmerProfile/FarmerProfile';
import { Layout } from '../components/Layout';
import { Login } from '../pages/login/Login';
import React from 'react';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/'
        element={(
          <Layout>
            <Login />
          </Layout>
        )}
      />

      <Route path='/home'
        element={(
          <Layout>
            <div>home products</div>
          </Layout>
        )}
      />

      <Route path='kart'
        element={(
          <Layout>
            <div>carrinho</div>
          </Layout>
        )}
      />

      <Route path='farmer-profile'
        element={(
          <Layout>
            <FarmerProfile />
          </Layout>
        )}
      />
    </Routes>
  </Router>
);
