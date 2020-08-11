import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/media/EYOx3nwXYAAiB3P?format=jpg&name=large" alt="Bruno Diferente"/>
        <div>
          <strong>Bruno Diferente</strong>
          <span>Culinária</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <br /><br />
        Ducimus deleniti deserunt assumenda, aspernatur nesciunt sunt natus? Temporibus corporis earum ipsam eum veritatis error architecto placeat dolores tempora. Totam, soluta unde.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;