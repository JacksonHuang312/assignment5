import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Fentstreams</h1>
      <div>
        <div className="input-boxes">
          <input type="text" id="username" placeholder="Username" />
          <br />
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="buttons">
          <div>
            <button className="login-button">Login</button>
          </div>
          <div>
            <button className="register-button">Register</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;