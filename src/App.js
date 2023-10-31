// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
}from 'react-router-dom';

function App() {

  return ( 
    <Router>
      <div className='App content'>
        <Navbar/>
    <div className='container my-3 content'>
      <Routes>
          <Route path="/About" element={<About/>}/>
          <Route exact path="/" element={ <TextForm experiment ="Do something"  title = "Enter The Text To Analyze Below."/>}/>
      </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;