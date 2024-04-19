import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
