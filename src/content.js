import React, { Component } from 'react';
import './defaultPage/styles/main.css';
import api1 from './api2.json';
import img404 from './defaultPage/404.png';

class Cont extends Component {

  state = {
    cards: [],
  }

  async componentDidMount() {

    this.setState({ cards: api1});
  }
 

  render() {

    const { cards } = this.state;
    console.log(cards);

    return (
      <div className="List">
        <h1>Listar os cards</h1>
        {cards.map(cards => (
          <li key = {cards.name}>
            <img src = {cards.image} alt = {img404} className ='Card_image' />
            <h1 >
              
              {cards.name}
            </h1>
            <h2>
              {cards.type}
            </h2>
            <i>
             <p> {cards.frase} </p>
              </i>

          </li>
        ))}
      </div>
    );
  };
};

export default Cont;