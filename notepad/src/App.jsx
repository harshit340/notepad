import Notes from './pages/Notes';
import Create from './pages/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Notes/>}></Route>
     <Route path="/create" element={<Create/>}></Route>
    </Routes>
     </Router>
  )
}

export default App
