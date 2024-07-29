import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import './App.css';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes >
        <Route path="/" element={<Hero />} />
        <Route path="/todo-list" element={<Todo />} />
        </Routes >
      </div>
      <Footer />
    </div>
     </Router>
  )
}

export default App;
