import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify"
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add' exact element={<AddContact />}/>
        <Route path='/edit/:id' exact element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
