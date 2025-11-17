import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  
useEffect(()=>{
  
})
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      
    </Router>
  )
}

export default App
