import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import GamePage from './pages/GamePage';

function App() {
  
  return (
   <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="play" element={<GamePage />} />
        
      </Routes>
    </div>
   </Router>
  )
}

export default App
