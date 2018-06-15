import Link from 'next/link';

const Header = () => (
  <nav className="navbar">
    <div className="container">
      <Link href='/'><a className="navbar-brand">KD</a></Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href='/'><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href='/about'><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header;