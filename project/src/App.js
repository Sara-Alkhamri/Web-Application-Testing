import React, { useState } from 'react';

import './App.css';
import Display from './componenets /Display';
import Dashboard from './componenets /Dashboard'

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strikeCount = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    }
    else {
      setStrikes(strikes + 1);
    }
  };

  const ballCount = () => {
    if (balls ===3 ) {
      setStrikes(balls + 1)
    }
  };

  const foulCount = () => {
    if (strikes !== 2) {
      setStrikes(strikes +1);
    }
  };

  const hitCount = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div>
      <h2>Baseball</h2>
      <Display strikes={strikes} balls={balls} />
      <Dashboard
        strike={strikeCount}
        ball={ballCount}
        foul={foulCount}
        hit={hitCount}
      />
    </div>
  )


}

export default App;