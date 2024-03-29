import React from 'react';
import { Link } from 'react-router-dom';


import './welcome.css';

export default function Welcome() {
  return (
    <>
    <div className='content'>
    <h1 className='hi'>Joey's Page of Fun</h1>
    <div className='directory-items'>
        <div className='titles'>
          <h3>Genie Info </h3>
          <h3>Alice in Wonderland</h3>
          <h3>New Movies</h3>
        </div>
        <div className='welcome'>
          <Link to="/genie"><img src='https://media3.giphy.com/media/jU1vHM8oQBaZHW1bT3/giphy.gif?cid=790b76115d47418f7669484d7327db44&rid=giphy.gif' alt='genie' /></Link>
          <Link to="/disney"><img className='drink-me' src='https://media.giphy.com/media/U51L9vKEbdgyrUeRHM/giphy.gif' alt='alice' /></Link>
          <Link to="/playing"><img src='https://media1.giphy.com/media/ykvRcYBJBiQwg/200w.webp?cid=790b76115d473e3179546c30493793ff&rid=200w.webp' alt='hello'/></Link>
        </div>
   
   
        <div className='titles'>
          <h3>Megaman</h3>
            <h3>RickAndMorty</h3>
          <h3>Stocks</h3>
        </div>
        <div className='welcome'>
          <Link to="/megaman"><img src='https://media.giphy.com/media/5vCUuxG7LNEwo/giphy.gif' alt='megaman' /></Link>
            <Link to="/rickandmorty"><img src='https://media3.giphy.com/media/f9R7zLHJQkhNcUzuFU/giphy.gif?cid=790b761122f5c4b2a15002cb8801347e301ec50218665c48&rid=giphy.gif' alt='rick'/></Link>
          <Link to="/stocks"><img src='https://thumbs.gfycat.com/IdealOptimisticGodwit-size_restricted.gif' alt='faceless'/></Link>
        </div>
    </div>
    </div>
    <footer className="footer">Joseph Reilly 2019</footer>

    </>
  )
}
