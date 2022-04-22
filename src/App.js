import './App.css';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { Link,Routes } from 'react-router-dom';
import SignIn from './SignIn';
import AnimalWelfare from './AnimalWelfare';
import AddNgo from './AddNgo';

function App() {
  return (

<div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="signin" element={<SignIn/>}></Route>
          <Route path="animalwelfare" element={<AnimalWelfare/>}></Route>
          <Route path="addngo" element={<AddNgo/>}></Route>
      </Routes>

        </div>
       
    
  );
}

export default App;
