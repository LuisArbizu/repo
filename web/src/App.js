import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Redirect from './pages/Redirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/redirect" element={<Redirect/>}/>
      </Routes>
    </Router>
  );
}

export default App;
