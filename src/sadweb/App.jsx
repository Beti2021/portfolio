import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import CreateAcc from "./SignIn/CreateAcc";
import Student from "../sadweb/Dashbord/Student/Student";
import Admin from "../sadweb/Dashbord/Admin/Admin";
import Proctor from "../sadweb/Dashbord/Proctor/Proctor";
import Registration from "../sadweb/Dashbord/Student/Registration";
import Home from "./Home/Home"; // Import Home component
import Feedback from "./Dashbord/Student/Feedback";
import FeedBack from "./Dashbord/Admin/FeedBack";
import Report from "./Dashbord/Admin/Report";

function App() {
  return (
    <Router>
      <Routes>
        {/* Make Home the root */}
        <Route path="/" element={<Home />} />  {/* Home as the root page */}

        {/* Other routes */}
        <Route path="/home" element={<Home />} /> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAcc />} />
        <Route path="/student" element={<Student />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/proctor" element={<Proctor />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/feedBack" element={<FeedBack />} />
        <Route path="/report" element={<Report />} />
        

      </Routes>
    </Router>
  );
}

export default App;
