
const Header = () => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
  
    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
  
    return (
      <header id="header" className="header">
        <div className="logo-container">
          <img src="src/logo.svg" alt="Logo" className="logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  