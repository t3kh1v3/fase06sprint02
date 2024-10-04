import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout';
import React from 'react';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/'
        element={(
          <Layout>
            <div>LOGIN</div>
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
            <div>perfil do vendedor</div>
          </Layout>
        )}
      />
    </Routes>
  </Router>
);
