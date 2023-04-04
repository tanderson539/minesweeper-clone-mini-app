import {Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </div>
  );
}

export default App;
