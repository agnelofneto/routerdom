import React from "react";
import "./../pages/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="card">
        <form>
         
          <div className="input-container">
          <span className="input-label">Email:</span>
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="input-container">
          <span className="input-label">Senha:</span>
            <input type="password" placeholder="Senha" className="input" />
          </div>
          <div className="button-container">
            <button className="button">Login</button>
          </div>
        </form>
        <a href="./forgot" className="link">
          Esqueceu a senha?
        </a>
      </div>
    </div>
  );
};
export default LoginPage;
