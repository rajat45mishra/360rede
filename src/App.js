import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css'
import * as pag from './pages/home'
import * as page from './pages/start'
import File from './pages/file'
import Filecont from './pages/filecont'
import Selected from './pages/selected'
import C404 from './pages/404'
import View from './pages/view'
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
          <Route exact path="/">
            <page.Start/>
          </Route>
          <Route path="/start">
            <pag.Home />
          </Route>
          <Route path="/file">
            <File />
          </Route><Route path="/filec">
            <Filecont />
          </Route>
          <Route path="/Selected">
            <Selected />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="*">
            <C404 />
          </Route>
        </Switch>
    </Router>
		</div>
	)
}

