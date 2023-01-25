import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Posts from './Post';
import Logout from './Logout';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Layout>
    </BrowserRouter>    
  );
}

export default App;
