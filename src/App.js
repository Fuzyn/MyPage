import Hello from './components/Hello'
import Portfolio from './components/Portfolio';
import './App.css';
import {useState} from "react";

function App() {
  const [portfolio, setPortfolio] = useState(localStorage.getItem('showPortfolio'))

  const showPortfolio = () => {
    setPortfolio(true)
    localStorage.setItem('showPortfolio', true)
  }

  return (
    <div>
      {portfolio ? <Portfolio /> : <Hello showPortfolio={showPortfolio} />}
    </div>
  );
}

export default App;
