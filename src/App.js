import Hello from './components/Hello'
import Portfolio from './components/Portfolio';
import { useState } from 'react';
import './App.css';

function App() {
  const [portfolio, setPortfolio] = useState(false)
  return (
    <div>
      {portfolio ? <Portfolio /> : <Hello setPortfolio={setPortfolio} />}
    </div>
  );
}

export default App;
