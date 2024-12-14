import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);