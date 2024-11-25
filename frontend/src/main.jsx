import React from "react";
import ReactDOM  from "react-dom";
import Home from "./Pages/Home";
import Plumbing from "./Pages/Plumbing_def";
import Electric from "./Pages/Electrician_def";
import Water from "./Pages/Ro_def";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Request from "./Pages/Request";
import Gas_Def from "./Pages/Gas_def"
import "./index.css"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Welcome from "./Pages/Welcome";
import Plumber from "./Pages/Plumber";
import Accepted from "./Pages/Accepted";
import Gas from "./Pages/Gas";
import Nouser from "./Pages/Nouser";
import Feedback from "./Pages/Feedback";
import Thanks from "./Pages/Thanks";
import Electrician from "./Pages/Electrician";
import Ro from "./Pages/Ro";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Login />,
  },
  {
    path:"/Plumb_def",
    element:<Plumbing />,
  },
  {
    path:"/Electrician_def",
    element:<Electric />
  },
 {
  path:"/Gas_def",
  element:<Gas_Def />
 },
 {
  path:"/Ro_def",
  element:<Water />
 },
 {
   path:"/Register",
   element:<Register />
 },
 {
  path:"/Contact",
  element:<Contact />
 },{
  path:"/welcome",
  element:<Welcome />
 },{
  path:"/home",
  element:<Home />
 },{
  path:"/plumbers",
  element:<Plumber />,
  errorElement:<Plumber />
 },{
  path:"/request/:name/:phone",
  element:<Request />
 },{
  path:"/request_accepted",
  element:<Accepted />
 },{
  path:"/gas",
  element:<Gas />
 },{
  path:"/nouser",
  element:<Nouser />
 },{
  path:"/feedback/:name",
  element:<Feedback />
 },{
  path:"/thanks",
  element:<Thanks />
 },{
  path:"/electrician",
  element:<Electrician />
 },{
  path:"/ro",
  element:<Ro />
 }
])
const app=ReactDOM.createRoot(document.getElementById("root"))
app.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)