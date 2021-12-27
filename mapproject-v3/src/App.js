import "./App.css";
import { Navbar } from "./components/Navbar";
import { Map } from "./components/Map";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import AddMarkers from "./components/Addtodb/AddMarkers";
import Addsubcat from "./components/Addtodb/Addsubcat";
import Register from "./Register";
// import Admin from "./components/Admin";
import { useState } from "react";
import Addcat from "./components/Addtodb/Addcat";
import Addcountry from "./components/Addtodb/Addcountry";
import Addstate from "./components/Addtodb/Addstate";
import Addcounty from "./components/Addtodb/Addcounty";
import EditMarker from "./components/Edit/EditMarker";
import CategoryNavbar from "./components/CategoryNavbar";
import Browse from "./components/Browse";
import useToken from "./components/useToken";

//----------------------Component below

function App() {
  const { token, setToken } = useToken();
  // const [token, setToken] = useState();
  const [category, setCategory] = useState();

  // function logToken() {
  //   console.log(token);
  // }

  // function loggedIn() {
  //   if (!token) {
  //     return (
  //       <React.Fragment>
  //         <Navbar token={token} />;
  //         <Login setToken={setToken} />;
  //       </React.Fragment>
  //     );
  //   }
  // }

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router basename="/p/f21-12/f21-v2">
      <div className="contain justify-content-center">
        {/* {loggedIn()} */}
        <Navbar setCategory={setCategory} token={token} />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/admin/addMarkers" component={AddMarkers} />
          <Route path="/admin/addSubcategory" component={Addsubcat} />
          <Route path="/admin/addCategory" component={Addcat} />
          <Route path="/admin/addCountry" component={Addcountry} />
          <Route path="/admin/addState" component={Addstate} />
          <Route path="/admin/addCounty" component={Addcounty} />
          <Route path="/admin/edit" component={EditMarker} />
          {/* <Route path="/p/f21-12/f21-v2/admin/browse" component={Browse} /> */}
          {/* <Route
          path="/"
          children={}
        /> */}
          {/* <Route path="/" children={<div></div>} /> */}
          <Route
            path="/"
            children={
              <div>
                {/* <CategoryNavbar setCategory={setCategory} /> */}
                <Map category={category} />
              </div>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
