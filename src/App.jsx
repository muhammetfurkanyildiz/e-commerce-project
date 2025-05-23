import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList';
import { Router } from 'react-router-dom';
import RouterConfig from './config/RouterConfig';
import Home from './pages/Home';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';

function App() {
  return (
    <>
      <PageContainer>
        <Loading />
        <Header />

        <RouterConfig />
      </PageContainer>
    </>
  );
}

export default App;
