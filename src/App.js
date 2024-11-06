import './App.css';
import { Revies, Reviews } from './Component';
import { Movie, TestMovie } from './Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Movie/>}/>
      <Route path='/revies' element={<Revies/>}/>
      <Route path='/test' element={<Reviews/>}/>
      <Route path='/movietest' element={<TestMovie/>}/>
    </Routes>
    </>
  );
}

export default App;
