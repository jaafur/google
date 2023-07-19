import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './Search';
import Results from './Results';
import NoPage from './NoPage';

const NavigationPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Results />} />
      <Route path="/search" element={<Results />} />
      <Route path="/image" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/video" element={<Results />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  );
};

export default NavigationPage;
