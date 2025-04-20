import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Newindex from './Newindex';
import Notification from './Notification';
import Noti from './Noti';
import Login from './Login';
import Home from './Home';
import Music from './Music';

function App() {
  return (
    <div >
      <Router>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='Music' element={<Music/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
