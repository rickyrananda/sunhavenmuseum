import '../src/components/section.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Achievement from './pages/Achievement';

function App() {
  return (
    <div className="bg-default w-full h-[calc(100vh-64px)] text-secondary p-4 flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/achievement" element={<Achievement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
