
'use client';

import React, { useState } from 'react';
import AiChat from './components/AiChat';
import Chatbot from './components/AiChat';

/* eslint-disable react/no-unescaped-entities */



const HomePage: React.FC = () => {
  

  return (
    <main className="black-gradient-container">
      <div className="black-gradient-content">

      <Chatbot apiEndpoint="/api/ai" />
    
  

      </div>
    </main>
  );
};

export default HomePage;