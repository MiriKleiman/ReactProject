import "./App.css";
import Login from "./component/Login";
import Customer from "./component/Customer";
import {  Routes, Route, useNavigate } from "react-router-dom";
import Meeting from "./component/Meeting";
import Services from "./component/Services";
import PersonalDetails from "./component/PersonalDetails";
import DoMeeting from "./component/DoMeeting";
import Setservices from "./component/Setservices";
import SetPersonalDetails from "./component/SetPersonalDetails";
function App() {
  let nav = useNavigate();
  const checked = false;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Customer />}></Route>
        <Route path="Login" element={<Login />}>
          {" "}
        </Route>
        <Route path="Meeting" element={<Meeting />}>
          {" "}
        </Route>
        <Route path="DoMeeting" element={<DoMeeting />}>
          {" "}
        </Route>
        <Route path="PersonalDetails" element={<PersonalDetails />}>
          {" "}
        </Route>
        <Route path="Setservices" element={<Setservices />}>
          {" "}
        </Route>
        <Route path="Services" element={<Services />}>
          {" "}
        </Route>
        <Route path="DoMeeting" element={<DoMeeting />}>
          {" "}
        </Route>
        <Route path="SetPersonalDetails" element={<SetPersonalDetails />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
