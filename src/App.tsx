import React from 'react';
import parfait from './79730.jpg';

function App() {
  return (
    <div className="font-serif h-screen bg-primary">
      <header>
        <h1 className="font-bold text-center mx-auto text-gray-50 text-4xl p-28">&ICECREAM</h1>
        <img className="object.contain h-80 mx-auto"src={parfait} alt='parfait'/>;
      </header>
    </div>
  );
}

export default App;