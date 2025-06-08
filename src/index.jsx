import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>DopaClean MVP</h1>
      <p>Welcome to your dopamine reset experience.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
