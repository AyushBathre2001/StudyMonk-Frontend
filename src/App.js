import './App.css';
import Footer from './components/Footer';
import Index from './components/Index';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Candidates from './components/Candidates';

function App() {
  
  return (
      <div className="App">
       
    <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/candidates' element={<Candidates />} />
        </Routes>
        <Footer />
    </Router>
      </div>
  );
}

export default App;
