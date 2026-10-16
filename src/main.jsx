// Client entry point for the PEXO scroll story.
import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import './styles.css';
import './story.css';
import './ai.css';
import App from './App';
createRoot(document.getElementById('root')).render(<React.StrictMode>
    <App />
  </React.StrictMode>);
