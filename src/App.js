import logo from './logo.svg';
import './App.css';
import "./pages/Style.css";
import Contact from './pages/Contact';
import About from './pages/About';
import HeaderComponent from './pages/HeaderComponet';

function App() {
  return (
    <div >
     <HeaderComponent/>
     <About/>
      <Contact/>
    </div>
  );
}

export default App;
