import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

import Clock from './Components/Clock/clock';
import Welcome from './Components/Welcome/welcome';
import Disney from "./Components/Disney/disney";
import Genie from './Components/Genie/genie';
import Playing from './Components/Playing/playing'
import RickAndMorty from './Components/RickAndMorty/rick-and-morty'
import Stock from './Components/Stock/stock';
import Megaman from './Components/Megaman/megaman';
import Robot from './Components/Robot/robot';
import Jokes from './Components/Jokes/jokes';
import Brewery from './Components/Brewery/brewery';
import Beer from './Components/Beer/beer';
import Bitcoin from './Components/Bitcoin/bitcoin';

import './App.css';
import './sidebar.css';

function App() {
  return (
    <div>
      <Router>
        <Clock className='clock' />
        <Menu  pageWrapId={"page-wrap"} outerContainerId={"App"}>
            <Link className="home" to ="/">Welcome</Link>
            <h3 id="cat">Economics</h3>
            <Link className="home" to ="/bitcoin">Bitcoin</Link>
            <Link className="home" to ="/stocks">Stocks</Link>
            <h3 id="cat">Movies</h3>
            <Link className="home" to ="/playing">In Theathers</Link>
            <Link className="home" to ="/disney">Alice</Link>
            <Link className="home" to ="/genie">Genie</Link>
            <h3 id="cat">Characters</h3>
            <Link className="home" to ="/rickandmorty">Rick and Morty</Link>
            <Link className="home" to ="/megaman">Megaman</Link>
            <Link className="home" to ="/robots">Robots</Link>
            <Link className="home" to ="/jokes">ChuckJokes</Link>
            <h3 id="cat">Colorado</h3>
            <Link className="home" to ="/brewery">CoBreweries</Link>
            <Link className="home" to ="/beer">CoBeer</Link>

        </Menu>

        <Route exact path="/" component={Welcome} />
        <Route path="/disney" component={Disney} />
        <Route path="/genie" component={Genie} />
        <Route path="/playing" component={Playing} />
        <Route path="/rickandmorty" component={RickAndMorty} />
        <Route path="/stocks" component={Stock} />
        <Route path="/megaman" component={Megaman} />
        <Route path="/robots" component={Robot} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/Brewery" component={Brewery} />
        <Route path="/beer" component={Beer} />
        <Route path="/bitcoin" component={Bitcoin} />

      </Router>
    </div>
  );
}

export default App;
