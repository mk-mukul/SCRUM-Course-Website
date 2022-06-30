import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './containers/Home';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Switch>
          <Route path='/' element={<Home />} />
        </Switch> */}
        <Home />
        <Footer />
        {/* <Redirect to={process.env.PUBLIC_URL} /> */}
      </Router>
    </>
  )
}
