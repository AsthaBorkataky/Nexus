import './App.css';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { Link,Routes } from 'react-router-dom';

function App() {
  return (

<div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
      </Routes>

        </div>
       
    
  );
}

export default App;
