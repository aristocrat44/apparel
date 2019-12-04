import React from 'react';
import {Route,Link, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Hats=()=>(
  <div>
    <h1>This is HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
     <Route exact path="/" component={HomePage}/>
     <Route path="/shop/hats" component={Hats}/>
     </Switch>
    </div>
  );
}

export default App;
