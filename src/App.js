// import logo from './logo.svg';

import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return ( 
    <>
    <Navbar/>
    <div className='container my-3'>
      <TextForm experiment ="Do something"  title = "Enter The Text To Analyze Below."/>
    </div>
    </>
  );
}

export default App;