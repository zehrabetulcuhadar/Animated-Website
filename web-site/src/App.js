import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCom from './components/NavbarCom';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <Router className="pagee">
      <div className="App">
        <NavbarCom/>
        <AnimatedRoutes/>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
