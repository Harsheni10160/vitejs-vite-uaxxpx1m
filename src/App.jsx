import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Usercard from './components/usercard.jsx';

function App() {
  const cards = Array.from({ length: 10 });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} />
      ))}
    </div>
  );
}

// export default App;
// import React from "react";
// import Usercard from "./components/Usercard";

// function App() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Usercard />
//     </div>
//   );
// }

export default App;
