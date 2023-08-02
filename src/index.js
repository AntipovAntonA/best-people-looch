import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const cssButton = {
  marginBottom: 37,
  marginTop: 20,
  width: 358,
  height: 50,
  fontSize: '21px',
  background: '#000000',
  borderRadius: 2,
  color: '#ffffff',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
let snabj = ['Колтышева Таня', 'Фокина Аня', 'Пименова Виктория', 'Зенина Настя', 'Артамонова Марина', 'Артамонова Даша', 'Емельянова Ольга',
  'Цветкова Ольга', 'Антипов Антон'];

function randomPeopleSnab() {
  const element = document.querySelector('#result');
  let randomIndex = Math.floor(Math.random() * snabj.length);
  let selected = snabj[randomIndex];
  element.textContent = selected;
}
root.render(
  <React.StrictMode>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{
        textAlign: 'center',
      }}>Кто лучший сотрудник месяца?</h1>
      <button style={cssButton} onClick={randomPeopleSnab}>
        Нажмите, чтобы узнать
      </button>
      <h2 id="result"></h2>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
