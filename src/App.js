import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { Link,Routes } from 'react-router-dom';
import SignIn from './SignIn';
import AnimalWelfare from './AnimalWelfare';
import AddNgo from './AddNgo';
import AllNgos from './AllNgos';
import Profile from './Profile';
import Footer from './Footer';
import ViewProfile from './ViewProfile';
import Update from './Update';
import Donate from './Donate';
import AddDonor from './AddDonor';
import ProfileDonor from './ProfileDonor';
import NgoDonations from './NgoDonations';

function App() {
  return (

<div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addngo" element={<AddNgo/>}></Route>
          <Route path="/allngos" element={<AllNgos/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="signin/profile" element={<Profile/>}></Route>
          <Route path="/viewProfile" element={<ViewProfile/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
          <Route path="/donate" element={<Donate/>}></Route>
          <Route path="/adddonor" element={<AddDonor/>}></Route>
          <Route path="/profiledonor" element={<ProfileDonor/>}></Route>
          <Route path="/ngodonations" element={<NgoDonations/>}></Route>
      </Routes>
     

        </div>
       
    
  );
}

export default App;
