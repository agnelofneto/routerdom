import React from "react";
import "./../pages/ForgotPage.css";


const ForgotPage = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Encontre sua conta</h1>
        <span className="subtitle">
          Insira seu email.
        </span>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="Email"
              className="input"
            />
          </div>
          <div className="button-container">
            <button className="button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPage;
