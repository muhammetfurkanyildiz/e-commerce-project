import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList';
import { Router } from 'react-router-dom';
import RouterConfig from './config/RouterConfig';

function App() {
  return (
    <>
      <PageContainer>
        <Header />
        <ProductList />
        <RouterConfig />
      </PageContainer>
    </>
  );
}

export default App;
