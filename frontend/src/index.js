import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './components/UserContext';
import CommentsContextProvider from './contexts/CommentsContext';
// import { UserProvider } from './UserContext'; // Ensure correct path to UserContext

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CommentsContextProvider>
        <App />
    </CommentsContextProvider>
);
