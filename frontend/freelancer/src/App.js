import React from "react";


import { Container } from "react-bootstrap";
import Header from "./conponents/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreens from "./conponents/screens/HomeScreens";
import LoginScreen from "./conponents/screens/LoginScreen";
import SignupScreen from "./conponents/screens/SignupScreen";
import HireFreelancer from "./conponents/screens/HireFreelancer";
import FindJobs from "./conponents/screens/FindJobs";
import About from "./conponents/screens/About";
import Fotter from "./conponents/Fotter/Fotter";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreens />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/login" element={<LoginScreen />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/signup" element={<SignupScreen />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Hirefreelancer" element={<HireFreelancer/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Findjobs" element={<FindJobs />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
        <Fotter/>
      </Router>
    </>
  );
}

export default App;
