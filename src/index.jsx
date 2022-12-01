import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/tailwind.css";
import Title from './components/Text/Title/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title title="Hotelverse Design System" size={"3xl"} underline={true} />
  </React.StrictMode>
);
