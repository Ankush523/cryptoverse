import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'
import { useEffect, useState } from 'react';
import './darkMode.css';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button className='ml-[1420px]' onClick={toggleTheme}>🔆</button>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:id" element={<Details/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
