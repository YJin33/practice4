import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './component/header';
import Info from './component/info';
import Menu from './component/menu';
import Review from './component/review';
import NavBar from './component/NavBar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const styles = {
  background: "#F0F0F3",
};

root.render(
  <React.StrictMode>
    <Header />
    <body style={styles}>
    <Info/>
    <Menu />
    <Review />
    </body>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
