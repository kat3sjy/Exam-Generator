import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ExamDirectory from './pages/ExamDirectory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/examDirectory' element={<ExamDirectory />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
