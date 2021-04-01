import React,{useEffect,useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css'
import * as pag from './pages/home'
import * as page from './pages/start'
import File from './pages/file'
import Filecont from './pages/filecont'
import Selected from './pages/selected'
import C404 from './pages/404'
import View from './pages/view'
import SignIn from './components/signin'
import SignUp from './components/Signup'
import PrivateRoute from './hooks/privateroute'
import PublicRoute from './hooks/publicroute'
import useConfig from './hooks/useConfig'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
	return (
		<div className="body">
      <Router>
        <Switch>
          <PublicRoute restricted={true} component={SignIn}  path="/signin" exact />
          <PublicRoute restricted={false} component={SignUp} path="/signup" exact />
          <PrivateRoute component={page.Start} path="/" exact />
          <PrivateRoute component={pag.Home} path="/start" exact />
          <PrivateRoute component={File} path="/file" exact />
          <PrivateRoute component={Filecont} path="/filec" exact />
          <PrivateRoute component={Selected} path="/Selected" exact />
          <PrivateRoute component={View} path="/view" exact />
          <Route path="*">
            <C404 />
          </Route>
        </Switch>
    </Router>
		</div>
	)
}

