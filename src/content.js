import React, { Component } from 'react';
//import api from './api';
import './defaultPage/styles/main.css';
import api1 from './api2.json';

class Cont extends Component {

  state = {
    cards: [],
  }

  async componentDidMount() {

    this.setState({ cards: api1});
  }

  render() {

    const { cards } = this.state;

    return (
      <div className="all">
        <h1>Listar os cards</h1>
        {cards.map(cards => (
          <li key={cards.id}>
            <h1>
              <strong></strong>
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