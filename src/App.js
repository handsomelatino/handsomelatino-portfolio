import { Route, Routes } from 'react-router-dom';
import LandingPage from './routes/LandingPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
