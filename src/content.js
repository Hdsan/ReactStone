import React, { Component } from 'react';
import api from './api';
import './defaultPage/styles/main.css';
//import api1 from 'api.json';

class Cont extends Component {

  state = {
    cards: [],
  }

  async componentDidMount() {
    const response = await api;

    this.setState({ cards: response.data });
  }

  render() {

    const { cards } = this.state;

    return (
      <div className="all">
        <h1>Listar os cards</h1>
        {cards.map(cards => (
          <li key={cards.show.id}>
            <h2>
              <strong>Nome: </strong>
              {cards.name}
            </h2>
            <p>
              {cards.show.type}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default Cont;