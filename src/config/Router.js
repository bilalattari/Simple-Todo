import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Screens/Home'
import About from '../Screens/About'
import Login from '../Screens/login'
import SignUp from '../Screens/signup'


function Navigation (){
    return(
        <BrowserRouter>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/register" component = {SignUp} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/about" component = {About} />
        </BrowserRouter>
    )
}

export default Navigation;


// export default function Navigation() {
//   return (
//     <Router>
     
//           <Route exact path="/" component = {Home} />
//           <Route path="/about"  component = {About} />
//     </Router>
//   );
// }
