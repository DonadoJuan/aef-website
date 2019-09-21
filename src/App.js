import React from 'react';
import './App.css';
import Layout from './Layout/Layout'
import AboutUs from './components/AboutUs/AboutUs'

const app = () => {
    return (
      <Layout>
          <AboutUs/>
          <p bgcolor="red">Holis</p>
          <span bgcolor="grey">pepex</span>
      </Layout>
    )
}

export default app;
