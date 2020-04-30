import React, { useState, useEffect } from 'react';
import List from '../List/List';
import Detail from '../Detail/Detail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {

  return ( 
    <BrowserRouter>
      <h1><a href="/">X-Files Monsters of the Week</a></h1>
      <Switch>
        <Route exact path='/monster/:name' component={Detail} />
        <Route exact path='/' component={List} />
      </Switch>
    </BrowserRouter>
  );
}
