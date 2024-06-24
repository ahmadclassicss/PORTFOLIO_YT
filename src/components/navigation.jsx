const Navigation = () => {
  return (
    <>
      <header className="nav">
        <nav className="navbar">
          <div>
            <img  className ="logo" src="/images/logo.jpg" alt="logo" />
          </div>
          <ul className="list">
            <li href="#">Menu</li>
            <li href="#">Locations</li>
            <li href="#">About</li>
            <li href="#">Contact Us</li>
          </ul>
          <button>Login</button>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
